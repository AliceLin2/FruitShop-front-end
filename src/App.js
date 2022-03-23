import React, { useEffect, useState } from "react";
import Search from "./Search";
import background from "./images/Lemon.png"
import {Link, Route, Switch} from "react-router-dom"
import Shop from "./Shop";
const styles = {
  display: "inline-block",
  width: "100px",
  padding: "10px",
  margin: "0 10px 10px",
  background: "#F39C12",
  color: "white",
  fontSize: "30px"
};

function App() {
  const [owners, setOwners] = useState([]);
  const [search, setSearch] = useState("");
  const path = '/owners'

  useEffect(() => {
    fetch("http://localhost:9292/owners")
      .then((r) => r.json())
      .then((owners) => setOwners(owners));
  }, []);

  const ownerList = owners.map(({id, name}) => (
    <h3 key={id}>
        <Link style={styles} to={`/owners/${id}/fruits`}>{name}</Link>
    </h3>
  ));

  return (
    <div style={{backgroundImage: `url(${background})`}}>
      <h1>Welcome to Fruit Shop!</h1>
      <Search search={search} onSearch={setSearch}/>
      <div>
          <ul>{ownerList}</ul>
          
          <Switch>
              <Route exact path={path}>
                  <h3>All</h3>
              </Route>
              <Route path={`${path}/:ownerId/fruits`}>
                  <Shop search={search}/>
              </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
