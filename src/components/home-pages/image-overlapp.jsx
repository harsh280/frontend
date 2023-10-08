
const ImageOverlapp = () => {
    return (
        <div className="flex w-full h-full relative">
            <div className="pl-10 pt-10 mt-5">
                <div className="rounded-xl">
                    <img className = "w-[250px] h-[350px]" src = "https://s.pinimg.com/webapp/left-ccce7532.png"/>
                </div>
            </div>
            <div className="block pl-32">
                 <div className="rounded-xl mb-[14px]">
                    <img className = "w-[200px] h-[250px]" src = "https://s.pinimg.com/webapp/topRight-6902088a.png"/>
                </div>
                <div className="rounded-xl">
                    <img className = "w-[200px] h-[300px]" src = "https://s.pinimg.com/webapp/right-2bd1edfc.png"/>
                </div>
            </div>
            <div className="rounded-xl absolute pl-48 pt-4">
                    <img className = "w-[350px] h-[500px]" src = "https://s.pinimg.com/webapp/center-2d76a691.png"/>
            </div>
            <div className="w-[350px] h-[100px] bg-white rounded-full absolute left-[150px] top-[200px] flex">
                <svg className = "text-center mt-[35px] ml-10" height="24" width="24" viewBox="0 0 24 24" aria-label="search" role="img"><path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"></path></svg>
                <h2 className="text-[#6E0F3C] font-bold text-2xl text-center mt-[30px] ml-2">easy chicken dinner</h2>
            </div>
        </div>
    )
}
 export default ImageOverlapp