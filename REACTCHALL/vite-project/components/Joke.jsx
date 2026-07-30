import React from "react"

export function Joke(props){
    const [isShown, setIsShown]=React.useState(false)

    function toggleShown(){
        setIsShown(prevShown=>!prevShown)
    }
    // if for a condition we are displaying more than one thing we should
    // make the logic here and then saver it in some vatiable and then display the
    // thing down in code

    return(
        <>
            {/* {props.setup && <p>Setup: {props.setup}</p>}  */}
            {/* Like wise ternary */}
            {props.setup ? <p>Setup: {props.setup}</p> : null} 


            {/* {isShown===true && <p>Punchline: {props.punchline}</p>} */}
            {/* this && can also be removed by using ternary because whem the isShown becomes zero then zero is directly displayed */}
            {isShown ? <p>Punchline: {props.punchline}</p> : null}


            {/* {!isShown && <button onClick={toggleShown}>Show punchline</button>}
            {isShown===true && <button onClick={toggleShown}>Hide punchline</button>} */}
            {/* we can do this by ternary  */}
            {<button onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>}
            <hr />
        </>
    )
}