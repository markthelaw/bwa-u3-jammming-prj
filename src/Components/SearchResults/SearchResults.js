import React, { Component } from 'react';
import styles from './SearchResults.css';
import TrackList from '../TrackList/TrackList';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';

class SearchResults extends Component{
  render(){
    return(
      <List className="SearchResults">
        <h2>Results</h2>
        <Divider />
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
      </List>
    );
  }
}

export default SearchResults;
