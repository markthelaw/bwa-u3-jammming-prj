import React, { Component } from 'react';
import styles from './Playlist.css';
import TrackList from '../TrackList/TrackList';
import {List} from 'material-ui/List';

class Playlist extends Component{
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event){
    this.props.onNameChange(event.target.value);
  }

  render(){
    return(
      <List className="Playlist">
        <input placeholder={this.props.playlistName} value={this.props.playlistName} onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
        <a>{!this.props.finishedSaving? 'Saving Playlist...':''}</a>
      </List>
    );
  }
}

export default Playlist;
