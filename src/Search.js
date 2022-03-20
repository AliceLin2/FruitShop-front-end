import React from "react";

function Search({onSearch, search}) {
  function handleChange(e){
    onSearch(e.target.value)
  }
  return (
    <div>
      <input
        type="text"
        style={{padding: "5px",width: "500px",margin: "10px 10px 10px"}}
        placeholder="Search by Fruit Name"
        onChange={handleChange}
        value={search}
      />
    </div>
  );
}

export default Search;