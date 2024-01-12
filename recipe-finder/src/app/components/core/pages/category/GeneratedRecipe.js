import React from 'react';

const parseRecipe = (recipeText) => {
  // Extrage titlul
  const titleMatch = recipeText.match(/Title:\s*(.*?)\s*\n/);
  const title = titleMatch ? titleMatch[1].trim() : 'Generated Recipe';

  // Extrage ingredientele
  const ingredientsMatch = recipeText.match(
    /Ingredients:\s*([\s\S]*?)\s*Instructions:/,
  );
  const ingredients = ingredientsMatch
    ? ingredientsMatch[1].split('\n').filter((i) => i)
    : [];

  // Extrage instrucțiunile
  const instructionsMatch = recipeText.match(/Instructions:\s*([\s\S]*)$/);
  const instructions = instructionsMatch
    ? instructionsMatch[1].split('\n').filter((i) => i)
    : [];

  return { title, ingredients, instructions };
};

export default function GeneratedRecipe({ recipe }) {
  if (!recipe) {
    return <div>No recipe generated.</div>;
  }

  const { title, ingredients, instructions } = parseRecipe(recipe);

  return (
    <div className="recipe-details p-4 flex flex-col gap-2">
      <h1 className="text-center fadeIn text-xl font-candal font-bold text-[var(--primary)]">
        {title}
      </h1>
      <h2 className="text-center text-base uppercase fadeIn fadeInDelay1 font-candal font-bold text-[var(--primary)]">
        Ingredients:
      </h2>
      <ul className="fadeIn fadeInDelay1 text-sm flex flex-col gap-1 text-[var(--primary)] text-center">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-center text-base uppercase fadeIn fadeInDelay1 font-candal font-bold text-[var(--primary)]">
        Instructions:
      </h2>
      <ol className="fadeIn fadeInDelay2 text-sm flex flex-col gap-1 text-[var(--primary)] text-center">
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
}
