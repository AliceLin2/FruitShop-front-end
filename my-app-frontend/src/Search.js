import React from "react";

function Search({onSearch, search}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by fruit name"
        onChange={onSearch}
        value={search}
      />
    </div>
  );
}

export default Search;