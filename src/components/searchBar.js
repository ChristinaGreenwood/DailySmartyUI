import React, { Component } from 'react'
                                        
 class SearchBar extends Component {
  render() {
    return (
       <form>
        <input
        type="search"
        name="search"
        placeholder="Press Enter to Search" 
        />   
        </form>
    );
  }
}

export default SearchBar;