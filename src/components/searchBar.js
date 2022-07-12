import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

import { withRouter } from 'react-router';

                                        
 class SearchBar extends Component {

  handleFormSubmit = function ({query}) {
    console.log("handle form Submit query", query);
    //nav to a new route
    this.props.history.push("/results");
  }

  renderInput(field) {
    return <input type="text" placeholder='Search DailySmarty' {...field.input} />
  }

  render() {

    const { handleSubmit } = this.props;

    return (
    <form className='seach-bar' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <Field name='query' component={this.renderInput}/>
    </form>
    );
  }
}

SearchBar = reduxForm({
  form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;