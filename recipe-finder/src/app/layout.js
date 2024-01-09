'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/core/Header';
import { Bodoni_Moda } from 'next/font/google';
import Footer from './components/core/Footer';
import Main from './components/core/Main';
import React, { useState, useEffect } from 'react';
import { metadata } from './components/core/pages/Metadata';
import { Candal } from 'next/font/google';
import { Capriola } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const bodoniModa = Bodoni_Moda({ subsets: ['latin'] });
const candal = Candal({
  subsets: ['latin'],
  weight: '400',
});
const capriola = Capriola({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('Favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [activePage, setActivePage] = useState('home');

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handlePageChange = (page, recipe) => {
    setActivePage(page);
    setSelectedRecipe(recipe);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    if (newSearchTerm) {
      setActivePage('search');
    } else {
      setActivePage('home');
    }
  };

  // Gestionarea Istoricului cu React Router
  useEffect(() => {
    window.history.pushState({ page: activePage }, '');

    const handlePopState = (event) => {
      if (event.state?.page) {
        setActivePage(event.state.page);
      } else {
        setActivePage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [activePage]);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="max-w-xl mx-auto min-h-screen flex flex-col">
        <Header
          onPageChange={handlePageChange}
          onSearchChange={handleSearchChange}
        />
        <div className="bg-[var(--main-bg)] flex-grow">
          <Main
            activePage={activePage}
            onCategorySelect={handlePageChange}
            selectedRecipe={selectedRecipe}
            searchTerm={searchTerm}
          />
        </div>
        <Footer favorites={favorites} onFooterClick={handlePageChange} />
      </body>
    </html>
  );
}
