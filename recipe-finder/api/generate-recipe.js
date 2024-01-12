const axios = require('axios');

const OPENAI_API_URL =
  'https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions';

const handler = async (req, res) => {
  if (req.method === 'POST') {
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
            Authorization: `Bearer ${process.env.API_KEY}`,
          },
        },
      );
      res.status(200).send(response.data.choices[0].text);
    } catch (error) {
      console.error('Eroare la interogarea API-ului OpenAI:', error);
      res.status(500).send('A apărut o eroare la generarea rețetei');
    }
  } else {
    res.status(405).send('Metodă nepermisă');
  }
};

module.exports = handler;
