import React from "react";
import {Link} from "react-router-dom"
import Logo from "../images/navbar_logo.png"

const Header = ()=>{
  return(
    <nav>
      <div>
        <Link to="/"><img src={Logo} className="nav-logo"/></Link>
      </div>
      <div className="nav-links">
        <Link to="/home">HOME</Link>
      </div>
    </nav>
  )
}

export default Header