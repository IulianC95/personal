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
import CookiePolicy from './components/core/pages/CookiePolicy';

const inter = Inter({ subsets: ['latin'] });
const bodoniModa = Bodoni_Moda({ subsets: ['latin'] });
const candal = Candal({
  subsets: ['latin'],
  weight: '400',
});
const capriola = Capriola({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }) {
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

  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(false);

  useEffect(() => {
    const acceptedCookies = localStorage.getItem('acceptCookies');
    if (acceptedCookies) {
      setHasAcceptedCookies(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('acceptCookies', 'true');
    setHasAcceptedCookies(true);
  };

  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered: ', registration);
        })
        .catch((registrationError) => {
          console.log(
            'Service Worker registration failed: ',
            registrationError,
          );
        });
    }
  }, []);

  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
    });
  }, []);

  const [generatedRecipe, setGeneratedRecipe] = useState(null);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content="public/images/meta-img.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link
          rel="icon"
          href="public/images/original-chef.ico"
          type="image/x-icon"
        />
        <link
          rel="shortcut icon"
          href="public/images/original-chef.ico"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="max-w-xl mx-auto min-h-screen flex flex-col">
        <Header
          onPageChange={handlePageChange}
          onSearchChange={handleSearchChange}
          setShowIOSInstructions={setShowIOSInstructions}
          showIOSInstructions={showIOSInstructions}
        />
        <div className="bg-[var(--main-bg)] flex-grow">
          {!hasAcceptedCookies && (
            <CookiePolicy onAccept={handleAcceptCookies} />
          )}
          <Main
            activePage={activePage}
            onCategorySelect={handlePageChange}
            selectedRecipe={selectedRecipe}
            searchTerm={searchTerm}
            generatedRecipe={generatedRecipe}
            setActivePage={setActivePage}
            setGeneratedRecipe={setGeneratedRecipe}
          />
        </div>
        <Footer onFooterClick={handlePageChange} />
      </body>
    </html>
  );
}
