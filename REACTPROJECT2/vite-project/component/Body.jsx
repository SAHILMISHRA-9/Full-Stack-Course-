import React from "react"

export function Body(){
    
    const [ingredient, setIngredient]=React.useState([])

    const ingredientList=ingredient.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        const Formdata= new FormData(event.currentTarget)
        const newingredient=Formdata.get("ingredient")
        setIngredient(prevIngredients =>[...prevIngredients, newingredient])
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