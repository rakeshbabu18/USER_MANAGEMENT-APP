import exp from 'express'
import { UserModel } from '../Models/UserModel.js'

const UserApp = exp.Router()


//USER API

//create user
UserApp.post('/users',async(req,res)=>{
    //get new user
    const newUser = req.body
    //create user documnet
    const newUserDoc = new UserModel(newUser)
    //save new user
    let user = await newUserDoc.save()
    //save res
    res.status(201).json({message:"user created",payload:user})
})
//read all users
UserApp.get('/users',async(req,res)=>{
    let usersList = await UserModel.find({status:true})
    res.status(200).json({message:"users",payload:usersList})
})
//read a user by id
UserApp.get('/users/:id',async(req,res)=>{
    //get id by url
    let userID = req.params.id;
    //get user details by id
    let user = await UserModel.findOne({_id:userID,status:true});
    if(!user)
    {
        res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"user found",payload:user})
})
//delete a user by id
UserApp.delete('/users/:id',async(req,res)=>{
    let userID = req.params.id;
    let user = await UserModel.findByIdAndUpdate(userID,{$set:{status:false}})
    if(!user){
        res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"user deleted",payload:null})
})

//activate user (make status true)
//PUT and PATCH
UserApp.patch('/users/:id',async(req,res)=>{
    let userID = req.params.id;
    let user = await UserModel.findByIdAndUpdate(userID,{$set:{status:true}},{new:true})

    res.status(200).json({message:"user activated",payload:user})
})




export default UserApp  