import React, { useState } from 'react';

const Search = (prop) => {
  const [search, setSearch] = useState('');

  function searchInput(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <p>Search</p>
      <input onChange={searchInput} />
    </div>
  );
};
export default Search;
