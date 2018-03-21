import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistName :'New Playlist',
      playlistTracks : [],
      finishedSaving: true,
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    console.log('tracks: ' + tracks);
    console.log('track id: ' + track.id);
    let found = tracks.some(t =>{return t.id===track.id });
    if(!found){
      tracks.push(track);
      this.setState({
        playlistTracks: tracks
      });
      let searchResults = this.state.searchResults;
      searchResults = searchResults.filter(currentTrack=>currentTrack.id!==track.id)
      this.setState({searchResults:searchResults})
    }else{
      console.log(`track id: ${track.id} already been added to playlist`);
    }
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    let searchResults = this.state.searchResults;
    searchResults.push(track);

    this.setState({
        playlistTracks: tracks,
        searchResults: searchResults
      });
  }

  updatePlaylistName(name){
    this.setState({
      playlistName: name
    });
  }

  savePlaylist(){
    this.setState({finishedSaving : false});
    const trackUris = this.state.playlistTracks.map(track=> track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(()=>{
      //clear out the saved playlist
      this.setState({
        finishedSaving : true,
        playlistName: 'New Playlist',
        playlistTracks: [],
      })
    })
  }

  onSearch(searchTerm, pageNumber){

    console.log(searchTerm);
    Spotify.search(searchTerm, pageNumber).then(searchResults => {
      this.setState({searchResults: searchResults});
      console.log('searchResults: ' + this.state.searchResults);
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.onSearch} searchValue={this.state.searchValue}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist
                playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist}
                finishedSaving={this.state.finishedSaving}/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
