import React, { Component } from 'react';
import styles from './Track.css';
import {ListItem} from 'material-ui/List';
import {pinkA200, transparent} from 'material-ui/styles/colors';

const isRemoval = true;
class Track extends Component{
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  showPreview(preview_url){
    if(preview_url){
      return(
      <audio controls>
        <source src={preview_url} type="audio/mpeg"/>
      </audio>);
    }else{
      return (<div>Preview Not Available</div>);
    }
  }
  addTrack(){
    this.props.onAdd(this.props.track);
    console.log('clicked addTrack, track: '+this.props.track);
  }

  removeTrack(){
    this.props.onRemove(this.props.track);
  }

  render(){
    return(
      <ListItem color={pinkA200} className="Track"
      primaryText={this.props.track.name}
      secondaryText={<p>{this.props.track.artist} | {this.props.track.album}</p> }
      onClick={this.props.isRemoval? this.removeTrack: this.addTrack}
      rightIcon={
        <a className='Track-action' onClick={this.props.isRemoval? this.removeTrack: this.addTrack}>
              {this.props.isRemoval? '-':'+'}</a>}
              >

        <div className="Track-information">
          {this.showPreview(this.props.track.preview_url)}
        </div>


      </ListItem>
    );
  }
}

export default Track;
