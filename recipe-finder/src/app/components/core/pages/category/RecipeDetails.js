export default function RecipeDetails({ recipe }) {
  if (!recipe) {
    return <div>No recipe selected.</div>;
  }

  return (
    <div className="px-4 flex flex-col gap-5">
      <h1 className="fadeIn text-xl text-center font-candal font-bold text-[var(--primary)]">
        {recipe.title}
      </h1>
      <picture className="fadeIn flex justify-center w-full">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="w-4/6 border border-black border-solid"
        />
      </picture>
      {recipe.ingredients && (
        <div className="fadeIn fadeInDelay1">
          <h3 className="text-l text-center font-candal font-bold text-[var(--primary)]">
            Ingredients:
          </h3>
          <div className="flex justify-center items-center">
            <ul className="list-disc list-inside">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-left">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {recipe.steps && (
        <div className="fadeIn fadeInDelay1">
          <h3 className="fadeIn fadeInDelay2 text-l text-center font-candal font-bold text-[var(--primary)]">
            Steps:
          </h3>
          <div className="flex justify-center items-center">
            <ol className="list-decimal list-inside text-center">
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
