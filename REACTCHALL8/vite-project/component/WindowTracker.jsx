import React from "react";

export default function WindowTracker(){
    // Since we want to change the outer 
    // property from the inner we can use UseEffect

    return(
        <h1>Window width: {window.innerWidth}</h1>
        
    )
}