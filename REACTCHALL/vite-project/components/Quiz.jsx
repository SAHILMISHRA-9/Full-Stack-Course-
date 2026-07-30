import React from "react";

export default function Quiz(){
    const [messages,setMessages] =React.useState(["a"])

    return (
        <div>
            {
                messages.length===1 ?<h1>You have 1 unread message</h1> 
                : messages.length>1 ? <h1>You have {messages.length} unread messages</h1>
                : <h1>You're are all caught up!</h1>
            }
        </div>
    )

}