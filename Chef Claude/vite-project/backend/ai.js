import { HfInference } from "@huggingface/inference"

// const hf = new HfInference(process.env.HF_ACCESS_TOKEN)

const hf = new HfInference(process.env.HF_ACCESS_TOKEN)
// console.log("TOKEN:", process.env.HF_ACCESS_TOKEN);
// console.log("ALL ENV:", process.env);

const SYSTEM_PROMPT = `
You are Chef Claude, an AI cooking assistant.

You receive a list of ingredients that a user has.

Suggest a delicious recipe using some or all of those ingredients.

Your response should contain:

- Recipe name
- Short description
- Ingredients list
- Step by step instructions

Format your answer in markdown.
`;

export async function getRecipeFromAI(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const response = await hf.textGeneration({
  model: "google/flan-t5-large",
  provider: "together", // 👈 required now
  inputs: `Create a recipe using: ${ingredientsString}`,
  max_new_tokens: 200,
});

const result = response.generated_text;

    console.log("AI RESULT:", result);

    return result || "No recipe generated.";
  } catch (err) {
    console.error("AI Error:", err);
    return "Something went wrong. Please try again.";
  }
}