import { marked } from "marked"

export default function ClaudeRecipe({ recipe }) {
  return (
    <section className="recipe-section">
      <h2>Chef Claude Recommends:</h2>

      <article
        className="suggested-recipe-container"
        dangerouslySetInnerHTML={{ __html: marked(recipe) }}
      />
    </section>
  );
}





// export default function ClaudeRecipe(){
//     return (
//         <section className="recipe-section">
//                 <h2>Chef Claude Recommends:</h2>

//                 <article className="suggested-recipe-container" aria-live="polite">
//                     <p>Based on the ingredients you have available, I would recommend making a simple and delicious{" "}
//                     <strong>Vegan Vegetable Pasta</strong> Here is the recipe:
//                     </p>

//                     <h3>Vegan Vegetable Pasta</h3>

//                     <strong>Ingredients:</strong>

//                     <ul>
//                         <li>8 oz pasta of your choice (spaghetti, penne, or linguine)</li>
//                         <li>2 tablespoons olive oil</li>
//                         <li>1 onion, diced</li>
//                         <li>3 cloves garlic, minced</li>
//                         <li>1 zucchini, sliced</li>
//                         <li>1 bell pepper, diced</li>
//                         <li>1 cup mushrooms, sliced</li>
//                         <li>2 tablespoons tomato paste</li>
//                         <li>1 (28 oz) can crushed tomatoes</li>
//                         <li>1 teaspoon dried oregano</li>
//                         <li>1 teaspoon dried basil</li>
//                         <li>Salt and black pepper to taste</li>
//                         <li>Fresh basil or parsley, chopped (optional)</li>
//                         <li>Vegan Parmesan cheese (optional)</li>
//                     </ul>

//                     <strong>Instructions:</strong>

//                     <ol>
//                         <li>Bring a large pot of salted water to a boil. Cook the pasta according to the package instructions until al dente. Drain and set aside.</li>

//                         <li>Heat the olive oil in a large skillet over medium heat. Add the diced onion and cook until softened, about 3–4 minutes.</li>

//                         <li>Stir in the minced garlic and cook for about 1 minute until fragrant.</li>

//                         <li>Add the zucchini, bell pepper, and mushrooms. Cook for 5–7 minutes until the vegetables are tender.</li>

//                         <li>Stir in the tomato paste and cook for 1 minute.</li>

//                         <li>Add the crushed tomatoes, oregano, basil, salt, and black pepper. Simmer for 15–20 minutes, stirring occasionally.</li>

//                         <li>Add the cooked pasta to the sauce and toss until evenly coated.</li>

//                         <li>Serve warm, garnished with fresh parsley or basil and vegan Parmesan if desired.</li>
//                     </ol>
//                 </article>
//         </section>
//     )
// }