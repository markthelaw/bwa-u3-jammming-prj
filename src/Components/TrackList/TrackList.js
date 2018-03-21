import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';
import Divider from 'material-ui/Divider';

class TrackList extends Component{

  render(){
    return(
      <div className="TrackList">

      {
        this.props.tracks.map(track => {
          return ( <div key={track.id}>
                        <Track track={track}

                        onAdd={this.props.onAdd}
                        isRemoval={this.props.isRemoval}
                        onRemove={this.props.onRemove} />
                        <Divider />
                   </div>)
        })
      }
      </div>
    );
  }
}


export default TrackList;
