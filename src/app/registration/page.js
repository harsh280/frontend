'use client';
import { useState } from "react"
import {useRouter} from 'next/navigation';
export default function Page(){
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const router = useRouter();
    const sendData = async () => {
        if(!name || !email || !password)
        return alert("All fields are mandatory");
        console.log(name);
        let result = await fetch("http://localhost:3000/api/auth",{
            method : "POST",
            body : JSON.stringify({name,email,password})
        });
        result = await result.json();
        if(result.success){
            alert("user added");
            router.push('/login');
        }
    }

    return (
        <div className="w-full h-full pt-[10%] lg:pl-[40%]">
                <div className="block lg:w-[37%] sm:[w-100%] h-full items-center"> 
            <p className="text-2xl text-black text-center pr-10">Sign Up to Pinterest</p>
            <input className = "border m-4 w-[80%] rounded-full p-4" value = {name} onChange = {(e) => setname(e.target.value)} placeholder="name"></input>
            <input className = "border m-4 w-[80%] rounded-full p-4" value = {email} onChange = {(e) => setemail(e.target.value)} placeholder="email"></input>
            <input type = "password" className = "border m-4 w-[80%] rounded-full p-4" value = {password} onChange = {(e) => setpassword(e.target.value)} placeholder="password"></input>
            <button className = "border text-white bg-black ml-[30%] rounded-full p-4"onClick={sendData}>Sign Up</button>
        </div>
        </div>
    )
}