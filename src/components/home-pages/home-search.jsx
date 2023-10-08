import ImageOverlapp from "./image-overlapp"
import Link from "next/link"
const HomeSearch = () => {
    return (
        <div className="h-full w-full bg-[#FFFD92] lg:flex block lg:pt-[2.5%] pt-[10%]">
            <div className="p-10 lg:w-[60%] w-full">
                <ImageOverlapp />
            </div>
            <div className="lg:w-[40%] w-full">
            <div className="w-full lg:mt-[20%]">
                    <h1 className="text-[#C31952] font-bold text-center text-6xl pr-10">Search for an idea</h1>
                </div>
                <div className="lg:w-[78%] lg:ml-[13%] ml-11 text-center mt-5">
                    <p className="text-[#C31952] font-semibold text-2xl pr-16">
                        What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you find.
                    </p>
                    <Link href = "/explore">
                    <button className="mr-16 mt-5 lg:mb-[0px] mb-[30px] bg-[#C31952] text-[#FFFD92] w-[90px] h-[50px] font-bold rounded-full">Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeSearch