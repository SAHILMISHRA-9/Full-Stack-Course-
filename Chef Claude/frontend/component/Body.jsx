import React from "react";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";

export function Body() {
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [ingredient, setIngredient] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  const recipeSection = React.useRef(null);
  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

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

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/recipe`, {
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
          getRecipe={getRecipe}
        />
      ) : null}

      {loading && <p>Generating Recipe...</p>}
      {error && <p role="alert">{error}</p>}

      {recipeShown ? <ClaudeRecipe recipe={recipe} /> : null}
    </main>
  );
}
