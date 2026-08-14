import dotenv from "dotenv";
dotenv.config(); // must run before anything that reads process.env

import express from "express";
import cors from "cors";
import { getRecipeFromAI } from "./ai.js";

const app = express();

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
    console.error("Server error:", err);
    res.status(500).json({
      error: err.message || "Server error while generating recipe",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});