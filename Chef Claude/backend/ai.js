const SYSTEM_PROMPT = `
You are Chef Claude, an AI cooking assistant.

You receive a list of ingredients that a user has.

Suggest two or more delicious recipe using some or all of those ingredients.

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
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            {
              role: "user",
              content: `Create a recipe using: ${ingredientsString}`,
            },
          ],
          max_tokens: 2024,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      // Groq returns error details in data.error.message
      throw new Error(data.error?.message || "Groq API request failed");
    }

    const result = data.choices?.[0]?.message?.content;

    console.log("AI RESULT:", result);

    return result || "No recipe generated.";
  } catch (err) {
    console.error("AI Error:", err);
    throw err;
  }
}