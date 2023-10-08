"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
//import bcrypt from "bcrypt";
export default function Page(){
    const router = useRouter();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const loginAuth = async () => {
        console.log(email);
        const response = await fetch("https://backend-mauve-nine.vercel.app/api/auth/getUser",{
            method : "POST",
            body : JSON.stringify({email,password})
        },
        );
        const data = await response.json();
        //console.log(data);
        // if(data == null){
        //     alert("User not found Kindly Signup");
        //     router.push("/registration");
        // }
        // if(data.password != password){
        //     console.log(data);
        //     return alert("Password Incorrect");
        // }
        // else{
        //     router.push("/userfeed");
        // }
        if(!data.success){
            alert("User does not exists, Kindly Sign Up");
            router.push("/registration");
            return;
        }
        if(data.success)
        router.push("/userfeed");
        else
        return alert("Invalid credentials");
    }
    return (
        <div className="w-full h-full pt-[10%] lg:pl-[40%]">
        <div className="block lg:w-[37%] sm:[w-100%] h-full items-center">
            <p className="text-2xl text-black text-center pr-10">Login to Pinterest</p>
            <input className = "border w-[80%] rounded-full p-4 m-4" onChange={(e) => setEmail(e.target.value)} placeholder="email"></input>
            <input type = "password" className = "border w-[80%] rounded-full p-4 m-4" onChange = {(e) => setPassword(e.target.value)} placeholder="password"></input>
            <button onClick = {loginAuth} className="border text-white bg-black ml-[30%] rounded-full p-4">Login</button>
        </div>
        </div>
    )
}