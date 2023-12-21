import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl:{
        type:String
    },
    shortUrl:{
        type:String
    }
});

const urlSort = mongoose.model("URLData",urlSchema);

export default urlSort;