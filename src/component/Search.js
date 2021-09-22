import React, {useState} from "react";

const Search = (prop) => {
  const [search, setSearch] = useState("");

  function searchInput(e) {
    setSearch(e.target.value);
  }
  function searchFeature() {
    prop.movie()
  }

  return(
    <div>
      <p>Search</p>
        <input onChange={searchInput}/>
    </div>  
  );
};
export default Search;