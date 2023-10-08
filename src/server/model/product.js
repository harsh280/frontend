import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    width : String,
    height : String,
    LikeCount : Number,
    src : String
})

export const Product = mongoose.models.products || mongoose.model("products",productModel);