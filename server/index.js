const express= require('express')
const cors= require('cors')
const {connect} = require('mongoose')
require('dotenv').config()
const userRoutes= require('./routes/userRoutes')
const {notFound, errorHandler}= require('./middlewares/errorMiddleware')

const app=express()
const port= process.env.PORT
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

connect(process.env.MONGO_URI).then(app.listen(port, ()=> console.log(`Server is running on port ${port}`))).catch(error => {console.log(error)})