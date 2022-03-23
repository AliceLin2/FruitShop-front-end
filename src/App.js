import React, { useEffect, useState } from "react";
import Search from "./Search";
import background from "./images/Lemon.png"
import {Link, Route, Switch} from "react-router-dom"
import ShopList from "./ShopList";

const styles = {
  display: "inline-block",
};

function App() {
  const [owners, setOwners] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [search, setSearch] = useState("");
  const path = '/owners'

  useEffect(() => {
    fetch("http://localhost:9292/owners")
      .then((r) => r.json())
      .then((owners) => setOwners(owners));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/fruits")
    .then((r) => r.json())
    .then((fruits) => setFruits(fruits))
  }, []);

  const ownerList = owners.map(({id, name}) => (
    <li key={id}>
        <Link style={styles} to={`/owners/${id}/fruits`}>{name}</Link>
    </li>
  ));

  return (
    <div style={{backgroundImage: `url(${background})`}}>
      <h1>Welcome to Fruit Shop!</h1>
      <Search search={search} onSearch={setSearch}/>
      <div>
          <Link style={styles} to={`/fruits`}>All Fruits</Link>
          <ul>{ownerList}</ul>
          
          <Switch>
              <Route exact path='/fruits'>
                  <ShopList search={search} fruits={fruits} onChangeFruit={setFruits}/>
              </Route>
              <Route path={`${path}/:ownerId/fruits`}>
                  <ShopList search={search} fruits={fruits} onChangeFruit={setFruits}/>
              </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
