import { response } from 'express';
import mongoose from 'mongoose';
import { UserDetailsSchema } from '../models/user-model';

const UserDetails = mongoose.model('UserDetails',UserDetailsSchema);


// Add Item in WishList

export const addItemWishList = (req,res)=>{
    UserDetails.updateOne({_id:req.params.userId},{$addToSet : {wishList : req.body.wishList}},(err,updatedUser)=>{
        if(err){
            res.send(err);
        }
        res.json({ message: "Added Item In WishList.", updatedUser });
    });

}

// Remove Item from wishList

export const deleteItemWishList = (req,res)=>{
    UserDetails.updateOne({_id:req.params.userId},{$pullAll :{wishList :req.body.wishList}},(err,updatedUser)=>{
        if(err){
            res.send(err);
        }else{
            res.json({ message: "Removed Item in wishList", updatedUser });
        }
    });
}