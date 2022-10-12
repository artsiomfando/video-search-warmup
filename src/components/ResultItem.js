import React from 'react';

class ResultItem extends React.Component {

  render() {
    return React.createElement('div', null, `${this.props.data} item to explore`);
  }
}

export default ResultItem;
