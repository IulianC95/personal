'use client';
import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

import jsonData from './json-files/soup-recipes.json';

const originalRecipeImage = '/images/original-chef.png';

export default function SoupsComponent({ onCategorySelect }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('Favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const handleRecipeClick = (recipe) => {
    if (recipe.recipe_url) {
      window.open(recipe.recipe_url, '_blank');
    } else {
      onCategorySelect('recipe-details', recipe);
    }
  };

  useEffect(() => {
    localStorage.setItem('Favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (recipe) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.some((fav) => fav.name === recipe.name)) {
        return currentFavorites.filter((fav) => fav.name !== recipe.name);
      } else {
        return [...currentFavorites, recipe];
      }
    });
  };
  return (
    <div className="pt-4 flex flex-col gap-5">
      <h2 className="text-xl text-center font-candal font-bold text-[var(--primary)]">
        Soup Recipes
      </h2>

      {jsonData.map((recipe, index) => (
        <section key={index} className="flex justify-center w-full px-4">
          <picture className="rounded-l-lg ">
            <img
              src={recipe.image_url}
              alt={recipe.title}
              className="h-20 w-32 fadeIn"
            ></img>
          </picture>
          <aside className="relative h-20 w-full bg-[var(--bg-secondary)] rounded-r-lg flex flex-col gap-1 items-center justify-center expandRight">
            <h3 className="text-base text-center font-candal font-bold text-[var(--primary)] fadeInDelayed">
              {recipe.title}
            </h3>

            <div className="flex gap-4 items-center">
              <a
                href={recipe.recipe_url}
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
                  favorites.some((fav) => fav.name === recipe.title)
                    ? fasStar
                    : farStar
                }
                onClick={() =>
                  toggleFavorite({
                    name: recipe.title,
                    imgSrc: recipe.image_url,
                    recipeUrl: recipe.recipe_url,
                  })
                }
                className={`cursor-pointer ${
                  favorites.some((fav) => fav.name === recipe.title)
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
