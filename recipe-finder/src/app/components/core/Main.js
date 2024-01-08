'use client';

import HomeComponent from './pages/HomeComponent';
import FavoritesComponent from './pages/FavoritesComponent';
import AboutUsComponent from './pages/AboutUsComponent';
import ContactComponent from './pages/ContactComponent';
import CookPageComponent from './pages/CookPageComponent';
import SoupsComponent from './pages/category/SouptsComponent';
import BBQ from './pages/category/BBQ';
import Vegetarian from './pages/category/Vegetarian';
import Breakfast from './pages/category/Breakfast';
import Burgers from './pages/category/Burgers';
import Desert from './pages/category/Desert';
import Pizza from './pages/category/Pizza';
import Pies from './pages/category/Pies';
import Smoothies from './pages/category/Smoothies';
import Sauces from './pages/category/Sauces';
import Pasta from './pages/category/Pasta';
import Seafood from './pages/category/Seafood';
import RecipeDetails from './pages/category/RecipeDetails';

export default function Main({
  activePage,
  onCategorySelect,
  selectedRecipe,
  setSelectedRecipe,
}) {
  return (
    <main>
      {activePage === 'home' && (
        <HomeComponent onCategorySelect={onCategorySelect} />
      )}
      {activePage === 'cookPage' && (
        <CookPageComponent onCategorySelect={onCategorySelect} />
      )}
      {activePage === 'favorites' && <FavoritesComponent />}
      {activePage === 'about' && <AboutUsComponent />}
      {activePage === 'contact' && <ContactComponent />}
      {activePage === 'soups' && (
        <SoupsComponent onCategorySelect={onCategorySelect} />
      )}
      {activePage === 'bbq' && <BBQ onCategorySelect={onCategorySelect} />}{' '}
      {activePage === 'vegetarian' && (
        <Vegetarian onCategorySelect={onCategorySelect} />
      )}
      {activePage === 'breakfast' && (
        <Breakfast onCategorySelect={onCategorySelect} />
      )}
      {activePage === 'burgers' && (
        <Burgers onCategorySelect={onCategorySelect} />
      )}
      {activePage === 'desert' && (
        <Desert onCategorySelect={onCategorySelect} />
      )}
      {activePage === 'pizza' && <Pizza onCategorySelect={onCategorySelect} />}
      {activePage === 'pies' && <Pies onCategorySelect={onCategorySelect} />}
      {activePage === 'smoothies' && (
        <Smoothies onCategorySelect={onCategorySelect} />
      )}
      {activePage === 'sauces' && (
        <Sauces onCategorySelect={onCategorySelect} />
      )}
      {activePage === 'pasta' && <Pasta onCategorySelect={onCategorySelect} />}
      {activePage === 'seafood' && (
        <Seafood onCategorySelect={onCategorySelect} />
      )}
      {activePage === 'recipe-details' && (
        <RecipeDetails recipe={selectedRecipe} />
      )}
    </main>
  );
}
