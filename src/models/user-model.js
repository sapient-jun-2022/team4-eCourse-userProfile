import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const schema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    Email: {
        type: String
    },
    mobileNo: {
        type: Number
    },
    Organization: {
        type: String
    },
    wishList: {
        type: [Number]
    },
    myLearningList: {
        type: [Number]
    },
    Language: {
        type: String
    },
    lernerStage: {
        type: String
    },
    creationDate : {
        type : Date,
        default : Date.now
    }
});