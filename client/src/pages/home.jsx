import React from "react";
import { Link } from "react-router-dom";
export default function Home(){
  return(
    <div className="home">
      <h1>HOME PAGE</h1>
      <Link to="/logout">
      <button className="button-no">SIGN OUT</button>
      </Link>
    </div>
  )
}