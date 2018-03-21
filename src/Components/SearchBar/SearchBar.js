import React, { Component } from 'react';
import styles from './SearchBar.css';

class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = {
      term: '',
      pageNumber:0,
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleNewValue = this.handleNewValue.bind(this);
  }

  search(event){
    //console.log('search parameter term: '+ this.state.term);
    localStorage.setItem('term', this.state.term);
    if(this.state.term){
      this.props.onSearch(this.state.term, this.state.pageNumber);
    }else{
      console.log('this.state.term is empty');
    }
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

  handleNewValue(event){
    return event.target.value;
  }

  display(){
    return (<div>
              <a>Pre</a>
              <a>Next</a>
            </div>)
    ;
  }

  render(){
    return(
      <div className="SearchBar">
        <input id="searchInput"
               placeholder="Enter A Song, Album, or Artist"
               input={localStorage.getItem('term')}
               onChange={this.handleTermChange}
               onKeyPress={this.handleKeyPress}/>
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}


export default SearchBar;
