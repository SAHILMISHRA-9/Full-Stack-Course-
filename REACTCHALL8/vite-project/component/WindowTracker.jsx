import React from "react";

export default function WindowTracker(){
    const [windowWidth, setwindowWidth]=React.useState(window.innerWidth)
    // Since we want to change the outer 
    // property from the inner we can use UseEffect
    React.useEffect(()=>{
        function watchWindowWidth(){
            setwindowWidth(window.innerWidth)
        }
        window.addEventListener("resize",watchWindowWidth)
        return function() {
            window.removeEventListener("resize",watchWindowWidth)
        }
    },[])

    return(
        <h1>Window width: {windowWidth}</h1>
        
    )
}