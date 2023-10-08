"use client";
const ButtonDemo = () => {

    const demofun = () => {
        console.log("Clicked");
    }

    return (
        <div>
            <button onClick={demofun}>Click Me</button>
        </div>
    )
}

export default ButtonDemo;