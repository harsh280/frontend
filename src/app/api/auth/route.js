import { connectionSrt } from "@/server/db";
import { User } from "@/server/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(req,res){

    try{
        await mongoose.connect(connectionSrt)
        const request = await req.json();
        //console.log(request);
        const hashedPassword = await bcrypt.hash(request.password,10);
        const newUser = await User.create({
            name : request.name,
            email : request.email,
            password : hashedPassword
        })
        await newUser.save();
        return NextResponse.json({newUser,success:true});
    }catch(error){
        return NextResponse.json({error,success:false})
    }

}

// export async function POST(req,res){
//     try{
//         console.log(req);
//         await mongoose.connect(connectionSrt);
//         const reqData = await req.json();
//         console.log(reqData.email);
//         const reqEmail = reqData.email;
//         const user = await User.findOne({reqEmail}).select("_id");
//         console.log("user:",user);
//         return NextResponse.json({user});
//     }catch(error){
//         console.log(error);
//         return NextResponse.json({status:500,success:false});

//     }
// }