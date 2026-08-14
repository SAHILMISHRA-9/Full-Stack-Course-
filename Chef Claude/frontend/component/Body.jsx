import React from "react";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";

export function Body() {
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [ingredient, setIngredient] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);


  const recipeSection=React.useRef(null)
  React.useEffect(()=>{
    if(recipe !== "" && recipeSection.current !== null){
      recipeSection.current.scrollIntoView({behaviour: "smooth"})
      // const yCoord=recipeSection.current.getBoundingClientRect().to
    }
  },[recipe])


  function addIngredient(formData) {
    const newingredient = formData.get("ingredient");
    if (newingredient === "") {
      return;
    }
    setIngredient((prevIngredients) => [...prevIngredients, newingredient]);
  }

  async function getRecipe() {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:5000/api/recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients: ingredient }),
      });

      const data = await res.json();
      console.log("API RESPONSE:", data);

      if (!res.ok || !data.recipe) {
        throw new Error(data.error || "No recipe returned");
      }

      setRecipe(data.recipe);
      setRecipeShown(true);
    } catch (err) {
      console.error("AI FULL ERROR:", err);
      setError("Something went wrong generating your recipe. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  

  return (
    <main>
      <form className="form" action={addIngredient}>
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
        ></input>
        <button type="submit">+ Add ingredient</button>
      </form>

      {ingredient.length > 0 ? (
        <IngredientList
          ref={recipeSection} 
          ingredient={ingredient} 
          getRecipe={getRecipe} />
      ) : null}

      {loading && <p>Generating Recipe...</p>}
      {error && <p role="alert">{error}</p>}

      {recipeShown ? <ClaudeRecipe recipe={recipe} /> : null}
    </main>
  );
}









// // import axios from "axios";
// import React from "react"
// import IngredientList from "./IngredientList";
// import ClaudeRecipe from "./ClaudeRecipe"

// export function Body(){
//     const [recipe, setRecipe] = React.useState("")
//     const [loading, setLoading] = React.useState(false)



    
//     const [ingredient, setIngredient]=React.useState([])

//     const [recipeShown,setRecipeShown]=React.useState(false)

//     // function toggleRecipeShown(){
//     //     setRecipeShown(prevShown => !prevShown)
//     // }
    
//     function addIngredient(formData){
//         const newingredient=formData.get("ingredient")
//         if(newingredient===""){
//             return;
//         }
//         setIngredient(prevIngredients =>[...prevIngredients, newingredient])
//     }


// //     async function getRecipe() {
// //     try {
// //       setLoading(true);

// //       const res = await axios.post("http://localhost:5000/api/recipe", {
// //         ingredients: ingredient,
// //       });

// //       setRecipe(res.data.recipe);
// //       setRecipeShown(true)
// //     } catch (err) {
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

//     async function getRecipe() {
//   try {
//     setLoading(true);

//     const res = await fetch("http://localhost:5000/api/recipe", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ ingredients: ingredient }),
//     });

//     const data = await res.json();
//     console.log("API RESPONSE:", data); // 👈 MUST ADD
//     if (!res.ok || !data.recipe) {
//         throw new Error(data.error || "No recipe returned");
//     }
//     setRecipe(data.recipe);
//     setRecipeShown(true);

//   } catch (err) {
//   console.error("AI FULL ERROR:", err);
//   console.error("AI ERROR MESSAGE:", err.message);
//   return "Something went wrong. Please try again.";
// } finally {
//     setLoading(false);
//   }
// }








//     return(
//         <main>
//             <form className="form" action={addIngredient}>
//                 <input 
//                     aria-label="Add ingredient" 
//                     type="text" 
//                     placeholder="e.g. organo"
//                     name="ingredient"
//                     >
//                 </input>
//                 <button  type="submit">+ Add ingredient</button>
//             </form>

//             {ingredient.length>0 ? 
//                 <IngredientList ingredient={ingredient} /**toggleRecipeShown={toggleRecipeShown}**/  getRecipe={getRecipe}/> 
//             : null}

//             {loading && <p>Generating Recipe...</p>}

//             {recipeShown ? <ClaudeRecipe recipe={recipe} /> : null}
//         </main>
//     )
// }






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


