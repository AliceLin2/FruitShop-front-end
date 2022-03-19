import React from "react";

function Search({onSearch, search}) {
  function handleChange(e){
    onSearch(e.target.value)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search by Fruit Name"
        onChange={handleChange}
        value={search}
      />
    </div>
  );
}

export default Search;