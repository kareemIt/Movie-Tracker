import React, { useState } from 'react';

const Search = (props) => {
  
  return (
    <div>
      <p>Search</p>
      <input onChange={props.onChange} />
    </div>
  );
};
export default Search;
