import React from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import ResultsList from './ResultsList';

class App extends React.Component {
  state = {searchResults: []};

  onSearchSubmit = () => {
    const randomSearchResultsAmount = Math.floor(Math.random() * 10);
    const randomSearchResults = [...new Array(randomSearchResultsAmount)].map((_, i) => ++i);

    this.setState({searchResults: randomSearchResults})
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <SearchResults amount={this.state.searchResults.length} />
        <ResultsList results={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
