import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return <div id="home">
    <h1 style={{color= firebrick}}> Your {name} is a web developer from your {city}</h1>
  </div>;
  // update the JSX being returned!
  
}

export default Home;
