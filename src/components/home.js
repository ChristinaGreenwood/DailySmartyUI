import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";



export default class Home extends Component {

  handleSearchBarSubmit(query) {
    console.log("handle form Submit query", query);
    this.props.history.push("/results");
  }
  
  render() {
    return (
      <div className='app'>
       <div>
        <Logo />
       </div>
       <div className='search'>
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
        <RecentPosts />
       </div>
      </div>
    );
  }
}
