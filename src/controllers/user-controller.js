import mongoose from 'mongoose';
import { UserDetailsSchema } from '../models/user-model';

const UserDetails = mongoose.model('UserDetails',UserDetailsSchema);




// Add new User  
export const addUser = (req,res)=>{
    let newUser = new UserDetails(req.body);

    newUser.save((err,userDetails)=>{
        if(err){
            res.send(err);
        }
        res.json(userDetails)
    })
}

// Get All User
export const getAllUser = (req,res)=>{
    UserDetails.find({},(err,userDetails)=>{
        if(err){
            res.send(err);
        }
        res.json(userDetails);
    })
}


// Get User By ID

export const getUserById = (req,res)=>{
    UserDetails.findById(req.params.userId,(err,user)=>{
        if(err){
            res.send(err);
        }
        res.json(user);
    })
}

// Update User By ID
export const updateUserDetails = (req,res)=>{
    UserDetails.findByIdAndUpdate({_id:req.params.userId},req.body,{new : true},(err,updatedUser)=>{
        if(err){
            res.send(err);
        }
        res.json(updatedUser);
    });

}

// Delete user by ID
export const deleteById = (req,res)=>{
    UserDetails.findByIdAndRemove(req.params.userId,(err,user)=>{
        if(err){
            res.send(err);
        }
        res.json({ message: "User deleted successfully.", user });
    })
}



export const home = (req,res)=>{
    res.json({"message":"welcome"});
};