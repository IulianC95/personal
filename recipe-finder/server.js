const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config(); // Acest rând este necesar pentru încărcarea variabilelor de mediu în dezvoltarea locală

const cors = require('cors');

app.use(express.json());
app.use(cors());

const OPENAI_API_URL =
  'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions';

app.post('/generate-recipe', async (req, res) => {
  const ingredients = req.body.ingredients;
  const prompt =
    'Create a recipe using only the given ingredients, you are not allowed to use extra ingredients. Give me instructions, ingredients and title' +
    ingredients.join(', ');

  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        prompt: prompt,
        max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`, // Folosește variabila de mediu aici
        },
      },
    );
    res.send(response.data.choices[0].text);
  } catch (error) {
    console.error('Eroare la interogarea API-ului OpenAI:', error);
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
