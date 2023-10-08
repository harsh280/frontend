import ImageOverlapp from "./image-overlapp"
import Link from "next/link"
const HomeSearch = () => {
    return (
        <div className="h-full w-full bg-[#FFFD92] flex pt-[2.5%]">
            <div className="p-10">
                <ImageOverlapp />
            </div>
            <div className="absolute top-[40%] right-[10px] block ml-10">
                <div className="w-full text-right">
                    <h1 className="text-[#C31952] font-bold text text-6xl pr-10">Search for an idea</h1>
                </div>
                <div className="w-[38%] text-center float-right mt-5">
                    <p className="text-[#C31952] font-semibold text-2xl pr-16">
                        What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you find.
                    </p>
                    <Link href = "/explore">
                    <button className="mr-16 mt-5 bg-[#C31952] text-[#FFFD92] w-[90px] h-[50px] font-bold rounded-full">Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeSearch