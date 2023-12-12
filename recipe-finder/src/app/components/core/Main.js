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

export default function Main({ activePage, onCategorySelect }) {
  return (
    <main>
      {activePage === 'home' && (
        <HomeComponent onCategorySelect={onCategorySelect} />
      )}
      {activePage === 'cookPage' && <CookPageComponent />}
      {activePage === 'favorites' && <FavoritesComponent />}
      {activePage === 'about' && <AboutUsComponent />}
      {activePage === 'contact' && <ContactComponent />}
      {activePage === 'soups' && <SoupsComponent />}
      {activePage === 'bbq' && <BBQ />}
      {activePage === 'vegetarian' && <Vegetarian />}
      {activePage === 'breakfast' && <Breakfast />}
      {activePage === 'burgers' && <Burgers />}
      {activePage === 'desert' && <Desert />}
      {activePage === 'pizza' && <Pizza />}
      {activePage === 'pies' && <Pies />}
      {activePage === 'smoothies' && <Smoothies />}
      {activePage === 'sauces' && <Sauces />}
      {activePage === 'pasta' && <Pasta />}
      {activePage === 'seafood' && <Seafood />}
    </main>
  );
}
