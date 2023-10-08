import Link from "next/link"
const HomeSignUp = () => {
    return (
        <div className="w-full h-full relative">
            <div className="w-full h-full relative">
                <img className="blur-sm w-full h-full" src = "https://thinkorion.com/wp-content/uploads/2022/06/1024x576.png"/>
            </div>
            <div className="absolute lg:top-[25%] top-[10%] left-[11%] w-[30%]">
                    <h1 className="text-white lg:text-7xl text-2xl text-left font-semibold leading-normal">Sign up to get your ideas</h1>
            </div>
            <div className="absolute top-[35%] right-[20%] w-[30%]">
            <Link href = "/registration">
            <button className="mt-5 bg-red-600 text-white lg:w-[190px] w-[170px] h-[50px] text-medium font-semibold rounded-full">Sign Up to Pinterest</button>
            </Link>
            </div>
            <div className="w-full h-[5%] bg-white relative">
                <div className="inline-flex absolute left-[10%] right-[10%] p-2 justify-evenly">
                    <a className = "font-medium text-sm" href = "#">Terms of Service</a>
                    <a className = "font-medium text-sm" href = "#">Privacy Policy</a>
                    <a className = "font-medium text-sm hidden lg:flex"href = "#">Help</a>
                    <a className = "font-medium text-sm hidden lg:flex"href = "#">Iphone App</a>
                    <a className = "font-medium text-sm hidden lg:flex" href = "#">Android App</a>
                    <a className = "font-medium text-sm hidden lg:flex" href = "#">Users</a>
                    <a className = "font-medium text-sm" href = "#">Collections</a>
                    <a className = "font-medium text-sm" href = "#">Shopping</a>
                    <a className = "font-medium text-sm" href = "#">Today</a>
                    <a className = "font-medium text-sm hidden lg:flex" href = "#">Explore</a>
                    <a className = "font-medium text-sm hidden lg:flex" href = "#">Watch</a>
                    <a className = "font-medium text-sm hidden lg:flex" href = "#">Shop</a>
                </div>
            </div>
        </div>
    )
}

export default HomeSignUp