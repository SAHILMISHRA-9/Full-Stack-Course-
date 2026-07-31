import dotenv from "dotenv";
dotenv.config(); // ✅ ONLY ONCE, at the very top

import express from "express";
import cors from "cors";
import { getRecipeFromAI } from "./ai.js";

const app = express();

console.log("TOKEN:", process.env.HF_ACCESS_TOKEN); // 👈 debug

app.use(cors());
app.use(express.json());

app.post("/api/recipe", async (req, res) => {
  try {
    const { ingredients } = req.body;

    if (!ingredients || ingredients.length === 0) {
      return res.status(400).json({ error: "Ingredients required" });
    }

    const recipe = await getRecipeFromAI(ingredients);

    res.json({ recipe });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port", process.env.PORT);
});