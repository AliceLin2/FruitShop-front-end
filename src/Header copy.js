import React from "react";
import {Link, Route, Switch} from "react-router-dom"
import FruitList from "./FruitList";
const styles = {
  display: "inline-block",
  width: "100px",
  padding: "10px",
  margin: "0 10px 10px",
  background: "#F39C12",
  color: "white",
  fontSize: "30px"
};

function Header2({owners, fruits}) {
  const ownerList = owners.map(({id, name}) => (
    <h3 key={id}>
        <Link style={styles} to={`/owners/${id}/fruits`}>{name}</Link>
    </h3>
  ));

  let {path} = '/owners'
return (
    <div>
        <ul>{ownerList}</ul>
        
        <Switch>
            <Route exact path={path}>
                <h3>All</h3>
            </Route>
            <Route path={`${path}/:ownerId`}>
                <FruitList fruits={fruits}/>
            </Route>
         </Switch>
    </div>
    );
}

export default Header2;