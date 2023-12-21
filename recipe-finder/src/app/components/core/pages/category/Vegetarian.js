'use client';
import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

const imgPath = './images/vegetarian-images/';

import jsonData from './json-files/vegetarian-recipes.json';

const vegetarianRecipes = jsonData.map((recipe) => ({
  name: recipe.title,
  imgSrc: recipe.image_url,
  recipeUrl: recipe.recipe_url,
}));

export default function Vegetarian() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('Favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

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
        Vegetarian Recipes
      </h2>

      {vegetarianRecipes.map((recipe, index) => (
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

            <div className="flex gap-4 items-center">
              <a
                key={index}
                href={recipe.recipeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[var(--primary)] text-white font-candal px-10 py-1 rounded-lg fadeInDelayed">
                  Recipe
                </button>
              </a>
              <FontAwesomeIcon
                icon={
                  favorites.some((fav) => fav.name === recipe.name)
                    ? fasStar
                    : farStar
                }
                onClick={() => toggleFavorite(recipe)}
                className={`cursor-pointer ${
                  favorites.some((fav) => fav.name === recipe.name)
                    ? 'text-yellow-500'
                    : '--primary'
                } text-xl fadeInDelayed`}
              />
            </div>
          </aside>
        </section>
      ))}
    </div>
  );
}
