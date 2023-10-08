import Link from "next/link"
const HomeShop = () => {
    return (
        <div className="h-full w-full lg:flex block">
            <div className="lg:w-[50%] w-full relative flex">
                <img className="w-full h-full" src = "https://s.pinimg.com/webapp/shop-de8ddf10.png"/>
                <div className="absolute ml-[12%] mt-[5%]">
                    <img className="lg:w-[250px] lg:h-[450px] w-[150px] h-[300px] rounded-[30px]" src = "https://s.pinimg.com/webapp/creator-pin-img-3bed5463.png"/>
                </div>
                <div className="absolute ml-[8%] mt-[60%]">
                    <img className="w-[100px] h-[100px] rounded-full" src = "https://s.pinimg.com/webapp/creator-avatar-262dfeba.png"/>    
                </div>
                <div className="absolute ml-[23%] mt-[72%]">
                    <p className="text-white font-semibold text-2xl">Scout the City</p>
                    <p className="text-white font-normal text-xl">56.7k followers</p>
                </div>
            </div>
            <div className="lg:w-[50%] w-full bg-[#FFE2EB] p-4">
                <div className="lg:w-[70%] w-[90%] lg:mt-[20%] mt-[0px] lg:ml-[15%] ml-[0px]">
                    <h1 className="lg:leading-normal leading-tight text-6xl text-[#C32F00] font-bold text-center">See it, make it, try it, do it</h1>
                    <p className="text-center text-2xl text-[#C32F00] p-4">
                        The best part of Pinterest is discovering new things and ideas from people around the world.
                    </p>
                    <Link href = "/explore">
                    <button className="ml-[40%] mt-2 bg-[#C32F00] text-[#FFE2EB] w-[90px] h-[50px] font-bold rounded-full">Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default HomeShop