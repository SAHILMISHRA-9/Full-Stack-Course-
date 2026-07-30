import React from "react"

export function Body(){
    
    const [ingredient, setIngredient]=React.useState(["all main spices","pasta","vegan veggies","tomoato pasta"])

    const [recipeShown,setRecipeShown]=React.useState(false)

    function toggleRecipeShowm(){
        setRecipeShown(prevShown => !prevShown)
    }

    const ingredientList=ingredient.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))

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
            {ingredient.length>0 ? <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul><br />
                {ingredient.length>3 ? <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Genreate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipeShowm}>Get a recipe</button>
                </div> : null}
            </section> : null}

            {recipeShown ? <section className="recipe-section">
                <h2>Chef Claude Recommends:</h2>

                <article class="suggested-recipe-container" aria-live="polite">
                    <p>Based on the ingredients you have available, I would recommend making a simple and delicious{" "}
                    <strong>Vegan Vegetable Pasta</strong> Here is the recipe:
                    </p>

                    <h3>Vegan Vegetable Pasta</h3>

                    <strong>Ingredients:</strong>

                    <ul>
                        <li>8 oz pasta of your choice (spaghetti, penne, or linguine)</li>
                        <li>2 tablespoons olive oil</li>
                        <li>1 onion, diced</li>
                        <li>3 cloves garlic, minced</li>
                        <li>1 zucchini, sliced</li>
                        <li>1 bell pepper, diced</li>
                        <li>1 cup mushrooms, sliced</li>
                        <li>2 tablespoons tomato paste</li>
                        <li>1 (28 oz) can crushed tomatoes</li>
                        <li>1 teaspoon dried oregano</li>
                        <li>1 teaspoon dried basil</li>
                        <li>Salt and black pepper to taste</li>
                        <li>Fresh basil or parsley, chopped (optional)</li>
                        <li>Vegan Parmesan cheese (optional)</li>
                    </ul>

                    <strong>Instructions:</strong>

                    <ol>
                        <li>Bring a large pot of salted water to a boil. Cook the pasta according to the package instructions until al dente. Drain and set aside.</li>

                        <li>Heat the olive oil in a large skillet over medium heat. Add the diced onion and cook until softened, about 3–4 minutes.</li>

                        <li>Stir in the minced garlic and cook for about 1 minute until fragrant.</li>

                        <li>Add the zucchini, bell pepper, and mushrooms. Cook for 5–7 minutes until the vegetables are tender.</li>

                        <li>Stir in the tomato paste and cook for 1 minute.</li>

                        <li>Add the crushed tomatoes, oregano, basil, salt, and black pepper. Simmer for 15–20 minutes, stirring occasionally.</li>

                        <li>Add the cooked pasta to the sauce and toss until evenly coated.</li>

                        <li>Serve warm, garnished with fresh parsley or basil and vegan Parmesan if desired.</li>
                    </ol>
                </article>
            </section> : null}
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


