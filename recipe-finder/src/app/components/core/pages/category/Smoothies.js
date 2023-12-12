const imgPath = './images/smoothies-images/';
const smoothiesRecipes = [
  {
    name: 'Grilled Chicken',
    imgSrc: `${imgPath}recipe-1.png`,
  },
];

export default function Smoothies() {
  return (
    <div className="pt-4 flex flex-col gap-5">
      <h2 className="text-xl text-center font-candal font-bold text-[var(--primary)]">
        Smoothies Recipes
      </h2>

      {smoothiesRecipes.map((recipe, index) => (
        <section key={index} className="flex justify-center w-full px-4">
          <picture className="rounded-l-lg ">
            <img
              src={recipe.imgSrc}
              alt={recipe.name}
              className="h-20 w-32 fadeIn"
            ></img>
          </picture>
          <aside className="h-20 w-full bg-[var(--bg-secondary)] rounded-r-lg flex flex-col gap-1 items-center justify-center expandRight">
            <h3 className="text-base text-center font-candal font-bold text-[var(--primary)] fadeInDelayed">
              {recipe.name}
            </h3>

            <button className="bg-[var(--primary)] text-white font-candal px-10 py-1 rounded-lg fadeInDelayed">
              Recipe
            </button>
          </aside>
        </section>
      ))}
    </div>
  );
}
