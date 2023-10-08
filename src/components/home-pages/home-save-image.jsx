const SaveImage = ({height , width , src, text, textsize}) => {
    return (
        <div className="relative cursor-pointer">
            <img className={`w-[${width}] h-[${height}] rounded-[50px] blur-[0.75px]`} 
                src = {src}
            />
            <div className="absolute top-[120px] w-[100%]">
                <p className={`font-semibold text-${textsize} text-white text-center pr-10`}>{text}</p>
            </div>
        </div>
    )
}

export default SaveImage;