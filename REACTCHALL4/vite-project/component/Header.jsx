// import React from "react";
import avatar from "/user.png"

export default function Header(props){
    // const [userName,serUserName]=React.useState("Joe")
    // we need to move this state to the higher level i.e App so that 
    // it is pass down to both header and body components through props

    return(
        <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>
    )
}