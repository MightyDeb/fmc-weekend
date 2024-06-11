import React, {useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Logout = ()=>{
  const {setCurrentUser}= useContext(UserContext)
  const navigate= useNavigate()
  setCurrentUser(null)
  
  return(
    <div className="logout_page">
      <h1>You just </h1><h1>logged out!!</h1>
      <Link to="/login"><button className="button-yes">Sign in</button></Link>
    </div>
  )
}

export default Logout