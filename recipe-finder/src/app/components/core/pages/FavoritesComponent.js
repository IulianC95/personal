'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

export default function FavoritesComponent() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('Favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Opțional: Funcția pentru a elimina o rețetă din favorite
  const removeFromFavorites = (recipeToRemove) => {
    const updatedFavorites = favorites.filter(
      (recipe) => recipe.name !== recipeToRemove.name,
    );
    setFavorites(updatedFavorites);
    localStorage.setItem('Favorites', JSON.stringify(updatedFavorites));
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
          <aside className="h-20 w-full bg-[var(--bg-secondary)] rounded-r-lg flex flex-col gap-1 items-center justify-center expandRight">
            <h3 className="text-base text-center font-candal font-bold text-[var(--primary)] fadeInDelayed">
              {recipe.name}
            </h3>
            <div className="flex gap-4 items-center">
              <a
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
                onClick={() => removeFromFavorites(recipe)}
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
