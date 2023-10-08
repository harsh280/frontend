import Link from "next/link"
const HomeSignUp = () => {
    return (
        <div className="w-full h-full relative">
            <div className="w-full h-full relative">
                <img className="blur-sm w-full h-full" src = "https://thinkorion.com/wp-content/uploads/2022/06/1024x576.png"/>
            </div>
            <div className="absolute top-[25%] left-[11%] w-[30%]">
                    <h1 className="text-white text-7xl text-left font-semibold leading-normal">Sign up to get your ideas</h1>
            </div>
            <div className="absolute top-[35%] right-[11%] w-[30%]">
            <Link href = "/registration">
            <button className="mt-5 bg-red-600 text-white w-[190px] h-[50px] text-medium font-semibold rounded-full">Sign Up to Pinterest</button>
            </Link>
            </div>
            <div className="w-full h-[5%] bg-white relative">
                <div className="inline-flex absolute left-[10%] right-[10%] p-2 justify-evenly">
                    <a className = "font-medium text-sm" href = "#">Terms of Service</a>
                    <a className = "font-medium text-sm" href = "#">Privacy Policy</a>
                    <a className = "font-medium text-sm"href = "#">Help</a>
                    <a className = "font-medium text-sm"href = "#">Iphone App</a>
                    <a className = "font-medium text-sm" href = "#">Android App</a>
                    <a className = "font-medium text-sm" href = "#">Users</a>
                    <a className = "font-medium text-sm" href = "#">Collections</a>
                    <a className = "font-medium text-sm" href = "#">Shopping</a>
                    <a className = "font-medium text-sm" href = "#">Today</a>
                    <a className = "font-medium text-sm" href = "#">Explore</a>
                    <a className = "font-medium text-sm" href = "#">Watch</a>
                    <a className = "font-medium text-sm" href = "#">Shop</a>
                </div>
            </div>
        </div>
    )
}

export default HomeSignUp