import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

export const User = mongoose.models.user || mongoose.model("user",UserModel);