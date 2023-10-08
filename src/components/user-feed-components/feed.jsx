import UserFeedImage from "./user-feed-image";
import { getProducts } from "@/server/get-products";

const Feed = async () => {
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
                                iconDisplay = "flex"
                            />
                        </div>
                    )
                )}
        </div>
    )
}

export default Feed;