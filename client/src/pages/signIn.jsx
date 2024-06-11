import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {UserContext} from "../context/userContext" 

const Login = ()=>{
  const [userData, setUserData]= useState({
    email:"", password:""
  })
  const [error, setError]= useState("")
  const navigate= useNavigate()
  const {setCurrentUser}= useContext(UserContext)

  const changeInputHandler =(e)=>{
    setUserData(prevState=>{
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const loginUserCredentials= async (e)=>{
    e.preventDefault()
    setError('')
    try{
      const response= await axios.post(`http://localhost:5000/api/users/login`, userData)
      const user= await response.data;
      setCurrentUser(user)
      navigate('/home')
    }catch(err){
      setError(err.response.data.message)
    }   
  }
  
  return(
    <section className="registerandlogin" onSubmit={loginUserCredentials}>
        <form className="form" >
        <h1>Sign In</h1>
          {error && <p className="form_error-message">{error}</p>}
          
          <input type="email" placeholder="Email" name='email' value={userData.email} onChange={changeInputHandler} />
          <input type="password" placeholder="Password" name='password' value={userData.password} onChange={changeInputHandler} />
          
          <button className="button-yes">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">sign up</Link></p>
    </section>
  )
}

export default Login