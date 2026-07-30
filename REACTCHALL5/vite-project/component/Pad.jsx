// import React from "react"
export default function Pad(props){
    // const [on, setOn]=React.useState(props.on)

    
    // function togggle(){
    //     setOn(prevOn=>!prevOn)
    // }
    // this was individual function which led to problem while implementing deatire singular for all which was alltoggle function
    // that turn off all button so now we are creatimh toggle function in the App.jsx which will passed down to each button component
    return(
        <button 
            style={{backgroundColor:props.color}}
            className={props.on ? "on" : ""}
            onClick={()=> props.toggle(props.id)}
        ></button>
    )
}