import exp from 'express'
import {config} from 'dotenv'
import { connect } from 'mongoose'
import  UserApp  from './APIS/UserAPI.js'
import cors from 'cors'

config()

const app = exp()

app.use(cors({
  origin: "http://localhost:5173"
}))

app.use(exp.json())

app.use("/users-api",UserApp)


async function connection() {
    try{
        await connect(process.env.DB_URL)
        console.log("connection successful!")

        app.listen(process.env.PORT,()=>{
        console.log("Server is running on port 4000")
        })
    }catch(err){
        console.log("connection failed!",err)
    }
}
connection()


//handling invalid path
app.use((req,res)=>{
    res.json({message:`${req.url} is invalid path`})
})




app.use((err,req,res,next)=>{
    console.log("err",err)

    res.json({message:"error",err})
    next()
})

app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});