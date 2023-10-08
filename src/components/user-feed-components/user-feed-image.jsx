'use client';
import { useState } from 'react';
import {GoThumbsup} from 'react-icons/go';
const UserFeedImage = ({height , width , src,LikeCount,iconDisplay}) => {

    const [likeText,setLikeText] = useState("Like");
    const count = LikeCount;
    const [likeNo,setLikeNo] = useState(count)
    const updateLike = () => {
        console.log("harsh");
        if(likeText == "Like"){
        setLikeText("Liked");
        setLikeNo(likeNo+1);
        }
        else{
        setLikeText("Like");
        setLikeNo(likeNo-1);
        }
    }
    return (
        <div className="relative pb-2 overflow-hidden rounded-2xl">
            <img className={`h-[${height}] w-[${width}] rounded-2xl hover:scale-110 transition-all duration-700`} src = {src}/>
            <div className="absolute lg:w-[48%] sm:w-[70%] md:w-[70%] top-[5%] left-[5%] bg-cyan-600 rounded-full flex justify-evenly">
                <p className="text-lg text-black text-center pl-2">{likeText}-{likeNo}</p>
                <button className={`${iconDisplay} p-[6px] cursor-pointer`} onClick={updateLike}>
                <GoThumbsup/>
                </button>
            </div>
        </div>
    )
}

export default UserFeedImage;