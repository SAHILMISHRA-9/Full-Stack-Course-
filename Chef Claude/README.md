# 👨‍🍳 Chef Claude

<div align="center">

### *Got ingredients? Chef Claude's got a recipe.*

Tell it what's in your fridge, and let AI whip up something delicious.

[![Live Demo](https://img.shields.io/badge/🍳_Live_Demo-Try_it_now-orange?style=for-the-badge)](https://chef-claude-lovat.vercel.app/)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Bundled%20with-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Powered by Groq](https://img.shields.io/badge/Powered%20by-Groq-F55036?style=for-the-badge)](https://groq.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## 🥘 What is Chef Claude?

Ever stared into your fridge with a random assortment of leftovers and no idea what to cook? Chef Claude solves that.

Type in whatever ingredients you have on hand, and Chef Claude — powered by a fast open-source LLM via Groq — generates a complete, ready-to-cook recipe: name, description, ingredient list, and step-by-step instructions, all beautifully rendered from markdown.

No sign-up. No fridge inventory app. Just ingredients in, recipe out.

## ✨ Features

- 🧂 **Add ingredients on the fly** — simple input, instantly added to your list
- 🤖 **AI-generated recipes** — powered by Llama 3.3 70B via Groq's blazing-fast inference API
- 📝 **Markdown-rendered output** — clean, readable recipe formatting with headings, lists, and steps
- ⏳ **Loading & error states** — clear feedback while your recipe is being cooked up (pun intended)
- 🎯 **Smooth scroll-to-recipe** — once you have 4+ ingredients, jump straight to the "Get a recipe" section
- 📱 **Responsive UI** — works cleanly across screen sizes

## 🕹️ How It Works

1. Type an ingredient (e.g. `oregano`) and click **+ Add ingredient**.
2. Repeat for everything you've got on hand.
3. Once you've added at least 4 ingredients, hit **Get a recipe**.
4. Chef Claude sends your ingredient list to the backend, which calls Groq's LLM API and returns a full recipe.
5. Sit back and read your personalized, AI-crafted dish.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| AI | Groq API (Llama 3.3 70B) |
| Markdown rendering | `marked` |
| Deployment | Vercel (frontend + backend deployed as separate projects) |

## 🚀 Getting Started

### Clone the repo

```bash
git clone https://github.com/<your-username>/chef-claude.git
cd chef-claude
```

### Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```dotenv
GROQ_API_KEY=your_groq_api_key_here
PORT=5000
```

Get a free API key at [console.groq.com](https://console.groq.com).

Run the backend:

```bash
node server.js
```

### Frontend setup

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/`:

```dotenv
VITE_API_URL=http://localhost:5000
```

Run the frontend:

```bash
npm run dev
```

The app will be running at `http://localhost:5173`.

## ☁️ Deployment

This project is deployed as **two separate Vercel projects**:

- **Frontend** — root directory: `frontend`, with `VITE_API_URL` set to the live backend URL
- **Backend** — root directory: `backend`, with `GROQ_API_KEY` set as an environment variable

> ⚠️ Remember: Vite bakes environment variables in at **build time**, and Vercel serverless functions snapshot env vars at **deploy time** — always redeploy after adding or changing an environment variable.

## 🗺️ Roadmap / Ideas for Next Iteration

- [ ] Let users specify dietary restrictions (vegan, gluten-free, etc.)
- [ ] Save favorite recipes with local storage
- [ ] Add a "surprise me" random recipe button
- [ ] Support recipe regeneration/variations
- [ ] Add unit tests for the backend API

## 🙋‍♂️ Author

**Sahil Mishra**
[LinkedIn](https://www.linkedin.com/in/sahillinkdin/) · [GitHub](https://github.com/SAHILMISHRA-9) · [LeetCode](https://leetcode.com/u/SAHILMISHRA99/)

---

<div align="center">

*Built for fun, for learning, and for anyone who's ever asked "what can I make with THIS?"*

</div>
