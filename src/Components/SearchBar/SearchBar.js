import React, { Component } from 'react';
import styles from './SearchBar.css';

class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = {
      term: '',
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  search(event){
    //console.log('search parameter term: '+ this.state.term);
    this.props.onSearch(this.state.term);
    //event.preventDefault();
  }

  handleTermChange(event){
    this.setState({term:event.target.value});
  }

  handleKeyPress(event){
    if(event.key==='Enter'){
      this.search(event);
    }
  }
  render(){
    return(
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}/>
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}


export default SearchBar;
