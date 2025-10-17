import mongoose from "mongoose";

const lawSchema = mongoose.Schema({
    name: String,
    cateogory: String, // Corrected the spelling of 'category'
    title: String,
    image: String
});


const Law = mongoose.model("Laws", lawSchema);
console.log(Law);

//export default Law;