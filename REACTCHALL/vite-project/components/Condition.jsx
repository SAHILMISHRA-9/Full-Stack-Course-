// A challange regarding the conditional rendering practice

import React from "react";

export default function Condition(){
    const [ undreadMessages, setUnreadMessages]=React.useState(["a","b"])

    return (
        <div>
            {
                undreadMessages.length>0 && 
                <h1>You have {undreadMessages.length} unread messages!</h1>
            }
            {
                undreadMessages.length===0 && 
                <p>You have no unread messages!</p>
            }
        </div>
    )
}
// in javascript a zero is considered a false value while other true
// so we can change the condition accordingly