const HttpError = require('../models/errorModel');
const User = require('../models/userModel')
const bcrypt= require('bcryptjs')
const jwt= require("jsonwebtoken")
require('dotenv').config()

//POST: api/users/register   REGISTER

const registerUser = async (req,res,next)=>{
  try{
    const {name, email, password, password2}= req.body;
    if(!name || !email || !password){
      return next(new HttpError("Fill in all fields.", 422))
    }
    const emailExists = await User.findOne({email})
    if(emailExists){
      return next(new HttpError("Email already exists.", 422))
    }
    if((password.trim()).length < 6){
      return next(new HttpError("Password should be atleast 6 characters.", 422))
    }
    if(password != password2){
      return next(new HttpError("Passwords do not match.", 422))
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPass= await bcrypt.hash(password, salt)
    const newUser = await User.create(
      {name, email, password: hashedPass}
    )
    res.status(201).json(`New User ${newUser.email} registered.`)
  }catch(error){
    return next(new HttpError("User registration failed.", 422))
  }
}

//POST: api/users/login   LOGIN
const loginUser = async (req,res, next)=>{
  try{
    const {email, password}= req.body
    if(!email || !password){
      return next(new HttpError("Fill in all fields.", 422))
    }
    const user = await User.findOne({email})
    if(!user){
      return next(new HttpError("Invalid Credentials.", 422))
    }
    const comparePassword = await bcrypt.compare(password, user.password)
    if(!comparePassword){
      return next(new HttpError("Invalid credentials. Incorrect Password.", 422))
    }
    //token
    const {_id: id, name}= user;
    const token= jwt.sign({id, name}, process.env.JWT_SECRET)
    //storing in cookie
    res.cookie("jwtoken", name, {
      expires: new Date(Date.now()+ 2589200000),
      httpOnly: true
    })
    res.status(200).json({token, id, name})
  }catch(error){
    return next(new HttpError("Login failed. Please check your credentials.", 422))
  }
}

module.exports = {registerUser, loginUser}