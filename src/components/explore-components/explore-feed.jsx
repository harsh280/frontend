"use client";
import UserFeedImage from "../user-feed-components/user-feed-image";
const getProducts = async () => {
    const response = await fetch("http://localhost:3000/api/products",{cache:"no-store"});
    const data = await response.json();
    //console.log(data);
    if(data.success){
        return data.result;
    }
    else{
        return {success:false}
    }
}

const ExploreFeed = async () => {
    let resultData = await getProducts();
    return (
        <div className="h-full w-full grid lg:grid-cols-5 sm:grid-cols-2 gap-2 pt-[8%] pl-11 pr-11">
            {resultData.map(
                    ({ _id, height, width, src ,LikeCount}) => (
                        <div key={_id}>
                            <UserFeedImage
                                height={height}
                                width={width}
                                src={src}
                                LikeCount = {LikeCount}
                                iconDisplay = "hidden"
                            />
                        </div>
                    )
                )}
        </div>
    )
}

export default ExploreFeed;