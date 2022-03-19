import React from "react";

function Header({owners}) {
  const options = owners.map((owner) => (<Option option={owner} key={owner.id}/>))
  function Option({option}){
      return <option value={option.name}>{option.name}</option>
  }
  return (
    <div>
        <h1>Welcome to fruit shop!</h1>
        <label>
            Choose which shop of owners below you want to go to?
            <select
                placeholder="owners"
                onChange={e=>console.log(e)}
            >
            <option value="All">All</option>
            {options}
            </select>
        </label>
    </div>
  );
}

export default Header;