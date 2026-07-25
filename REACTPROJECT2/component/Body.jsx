export function Body(){
    function handleClick(){
        console.log('I was clicked')
    }
    return(
        <main>
            <form className="form">
                <input aria-label="Add ingredient" type="text" placeholder="e.g. organo"></input>
                <button onClick={handleClick} type="button">+ Add ingredient</button>
            </form>
            
        </main>
    )
}