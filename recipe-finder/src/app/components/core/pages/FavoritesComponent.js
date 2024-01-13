'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

const originalRecipeImage = '/images/original-chef.png';

export default function FavoritesComponent({ onCategorySelect }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('Favorites');

    return savedFavorites
      ? JSON.parse(savedFavorites).map((fav) => ({
          ...fav,
          title: fav.title || fav.name,
          image_url: fav.image_url || fav.imgSrc,
          recipe_url: fav.recipe_url || fav.recipeUrl,
        }))
      : [];
  });

  const removeFromFavorites = (recipeToRemove) => {
    const updatedFavorites = favorites.filter(
      (recipe) => recipe.name !== recipeToRemove.name,
    );
    setFavorites(updatedFavorites);
    localStorage.setItem('Favorites', JSON.stringify(updatedFavorites));
  };

  const handleRecipeClick = (recipe) => {
    if (recipe.recipeUrl) {
      window.open(recipe.recipeUrl, '_blank');
    } else {
      onCategorySelect('recipe-details', recipe);
    }
  };

  return (
    <div className="pt-4 flex flex-col gap-5">
      {favorites.map((recipe, index) => (
        <section key={index} className="flex justify-center w-full px-4">
          <picture className="rounded-l-lg ">
            <img
              src={recipe.imgSrc}
              alt={recipe.name}
              className="h-20 w-32 fadeIn"
            ></img>
          </picture>
          <aside className="relative h-20 w-full bg-[var(--bg-secondary)] rounded-r-lg flex flex-col gap-1 items-center justify-center expandRight">
            <h3 className="text-base text-center font-candal font-bold text-[var(--primary)] fadeInDelayed">
              {recipe.name}
            </h3>
            <div className="flex gap-4 items-center">
              <a
                href={recipe.recipeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  onClick={() => handleRecipeClick(recipe)}
                  className="bg-[var(--primary)] text-white font-candal px-10 py-1 rounded-lg fadeInDelayed"
                >
                  Recipe
                </button>
              </a>
              <FontAwesomeIcon
                icon={
                  favorites.some((fav) => fav.name === recipe.name)
                    ? fasStar
                    : farStar
                }
                onClick={() => removeFromFavorites(recipe)}
                className={`cursor-pointer ${
                  favorites.some((fav) => fav.name === recipe.name)
                    ? 'text-yellow-500'
                    : '--primary'
                } text-xl fadeInDelayed`}
              />
              {recipe.original && (
                <picture className="w-10 h-10 absolute right-0 bottom-0">
                  <img
                    src={originalRecipeImage}
                    alt="GPT Recipe"
                    title="GPT Recipe"
                  />
                </picture>
              )}
            </div>
          </aside>
        </section>
      ))}
    </div>
  );
}
