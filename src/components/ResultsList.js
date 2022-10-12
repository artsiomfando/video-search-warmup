import React from 'react';
import ResultItem from './ResultItem';

const ResultsList = ({results}) => {
  const renderedResults = results.map((result) => <ResultItem data={result} key={result} />)
  
  return <div className='ui relaxed divided list'>{renderedResults}</div>
}

export default ResultsList;
