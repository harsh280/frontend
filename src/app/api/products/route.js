import { connectionSrt } from "@/server/db";
import { Product } from "@/server/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { UserFeedData } from "@/mockData/user-feed-data";

export async function GET(){
    let data = [];
    let success = true;
    try{
        await mongoose.connect(connectionSrt);
        data = await Product.find();
    }catch(error){
        data = {result:"error"}
        success = false
    }
    return NextResponse.json({result:data,success})
}

// export const POST = async(request) => {
//     const payload = await request.json();
//     await mongoose.connect(connectionSrt);
//     const product = new Product(payload);
//     const result  = await product.save();
//     return new NextResponse({result,success:true})
// }
export async function POST (req, res) {
    try {
      await mongoose.connect(connectionSrt);
  
  
      const results = await Product.insertMany(UserFeedData);
  
      mongoose.connection.close(); 
    } catch (error) {
      console.error("Error saving products:", error);
    }
  }