export function Body(){
    
    const ingredient=["chicken","tomato","organo"]

    const ingredientList=ingredient.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        // console.log('I was clicked')
        const Formdata= new FormData(event.currentTarget)
        const newingredient=Formdata.get("ingredient")
        // console.log(newingredient)
        ingredient.push(newingredient)
        console.log(ingredient)
    }

    return(
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    aria-label="Add ingredient" 
                    type="text" 
                    placeholder="e.g. organo"
                    name="ingredient"
                    >
                </input>
                <button  type="submit">+ Add ingredient</button>
            </form>
            <ul>
                {ingredientList}
            </ul>
        </main>
    )
}