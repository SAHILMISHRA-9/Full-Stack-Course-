import React from "react"
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe"

export function Body(){
    
    const [ingredient, setIngredient]=React.useState(["all main spices","pasta","vegan veggies","tomoato pasta"])

    const [recipeShown,setRecipeShown]=React.useState(false)

    function toggleRecipeShown(){
        setRecipeShown(prevShown => !prevShown)
    }
    
    function addIngredient(formData){
        const newingredient=formData.get("ingredient")
        if(newingredient===""){
            return;
        }
        setIngredient(prevIngredients =>[...prevIngredients, newingredient])
    }

    return(
        <main>
            <form className="form" action={addIngredient}>
                <input 
                    aria-label="Add ingredient" 
                    type="text" 
                    placeholder="e.g. organo"
                    name="ingredient"
                    >
                </input>
                <button  type="submit">+ Add ingredient</button>
            </form>

            {ingredient.length>0 ? 
                <IngredientList ingredient={ingredient} toggleRecipeShown={toggleRecipeShown}/> 
            : null}

            {recipeShown ? <ClaudeRecipe /> : null}
        </main>
    )
}






// import React from "react"

// export function Body(){
    
//     const [ingredient, setIngredient]=React.useState([])

//     const ingredientList=ingredient.map(ingredient =>(
//         <li key={ingredient}>{ingredient}</li>
//     ))

//     function handleSubmit(event){
//         event.preventDefault()
//         const Formdata= new FormData(event.currentTarget)
//         const newingredient=Formdata.get("ingredient")
//         setIngredient(prevIngredients =>[...prevIngredients, newingredient])
//     }

//     return(
//         <main>
//             <form className="form" onSubmit={handleSubmit}>
//                 <input 
//                     aria-label="Add ingredient" 
//                     type="text" 
//                     placeholder="e.g. organo"
//                     name="ingredient"
//                     >
//                 </input>
//                 <button  type="submit">+ Add ingredient</button>
//             </form>
//             <ul>
//                 {ingredientList}
//             </ul>
//         </main>
//     )
// }


