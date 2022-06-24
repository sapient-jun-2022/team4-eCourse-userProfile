import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserDetailsSchema = new Schema({
    firstName: {
        type: String,
        required : "First Name is mandatory......."
    },
    lastName: {
        type: String,
        required : "Last Name is mandatory......."
    },
    email: {
        type: String,
        required : "Email is mandatory......."
    },
    password:{
        type:String,
        required : "Password is mandatory......."
    },
    phone: {
        type: Number,
        required : "Phone Number is mandatory......."
    },
    organization: {
        type: String
    },
    wishList: {
        type: [Number]
    },
    myLearningList: {
        type: [Number]
    },
    language: {
        type: String
    },
    lernerStage: {
        type: String,
        required : "Learning is mandatory......."
    },
    creationDate : {
        type : Date,
        default : Date.now
    }
});