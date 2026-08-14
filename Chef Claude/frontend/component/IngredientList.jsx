export default function IngredientList({ ref, ...props }){

    const ingredientList=props.ingredient.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))
    return(
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul><br />
            {props.ingredient.length>3 ? <div className="get-recipe-container">
                <div ref={ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Genreate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div> : null}
        </section>
    )
}
