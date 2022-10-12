import React from 'react';

class SearchBar extends React.PureComponent {
  state = {searchInput: ''};

  onSearchInputChange = (event) => {
    this.setState({searchInput: event.target.value})
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit();
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Search</label>
            <input
              type="text"
              value={this.state.searchInput}
              onChange={this.onSearchInputChange}
            />
          </div>
          <button className='ui button'>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
