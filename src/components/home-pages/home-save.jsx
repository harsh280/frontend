import SaveImage from "./home-save-image"
import Link from "next/link"
const HomeSave = () => {
    return (
        <div className="h-full w-full flex bg-[#DAFFF6]"> 
            <div className="w-[40%]">
                <div className="w-full mt-[30%] ml-[16%]">
                    <h1 className="font-bold text-[#006B6C] text-6xl text-center">Save ideas you like</h1>
                </div>
                <div className="w-[70%] ml-[30%] mt-[5%]">
                    <p className="text-[#006B6C] text-2xl text-center">
                        Collect your favorites so you can get back to them later
                    </p>
                    <Link href = "/explore">
                    <button className="mt-5 ml-[35%] bg-[#006B6C] text-[#DAFFF6] w-[90px] h-[50px] font-bold rounded-full">Explore</button>
                    </Link>
                </div>
            </div>
            <div className="w-[60%] flex">
                <div className="block ml-[10%] pl-10 pt-5">
                    <div className="pb-5">
                    <SaveImage 
                        height = "350px"
                        width="320px"
                        text = "Fern future home vibes"
                        textsize = "2xl"
                        src = "https://hbu.h-cdn.co/assets/17/12/768x1152/gallery-1490391244-gallery-1446233648-dining-room.jpg"
                    />
                    </div>
                    <div className="pl-16">
                <SaveImage
                        height = "330px"
                        width="200px"
                        text = "serve my drink"
                        textsize = "2xl"
                        src = "https://cdn.vibecity.in/providers/63e609ba1095ba0012311f77/610624d8-d4f1-4d8a-96e3-acfefda3c7c6_8ed88f34-74e8-41bf-8125-6343a5aee708-3X.png"
                    />
                    </div>
                </div>
                <div className="ml-[5%] mt-[2%] block">
                    <div className="mb-[5%]">
                     <SaveImage 
                        height = "200px"
                        width="200px"
                        text = "my scandinavian bedroom"
                        textsize = "2xl"
                        src = "https://3.bp.blogspot.com/-1GOsjn6ABWs/V9m2MOi5V6I/AAAAAAAA-nk/AXeBqVwmG34JIi--RlZP-NudY5fUCywJACLcB/s1600/Nordahl%2BSeptember-1223diningtable.jpg"
                    />
                    </div>
                    <div>
                     <SaveImage
                        height = "330px"
                        width="250px"
                        text = "the deck of my dreams"
                        textsize = "2xl"
                        src = "https://media.designcafe.com/wp-content/uploads/2019/12/17054440/living-room-furniture-design-for-your-home.jpg"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeSave