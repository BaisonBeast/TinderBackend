import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String, 
    Imageurl: String,
})

export default mongoose.model('Cards', cardSchema);