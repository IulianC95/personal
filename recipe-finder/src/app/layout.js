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
    // Aici poți adăuga orice altă logică necesară pentru setarea cookies
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

  const handlePlusClick = () => {
    if (isIOS()) {
      // Afisează instrucțiunile pentru iOS
      setShowIOSInstructions(true);
    } else {
      // Logica pentru declanșarea prompt-ului pe dispozitive non-iOS
      const promptEvent = window.deferredPrompt;
      if (promptEvent) {
        promptEvent.prompt();
        promptEvent.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          window.deferredPrompt = null;
        });
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="max-w-xl mx-auto min-h-screen flex flex-col">
        <Header
          onPageChange={handlePageChange}
          onSearchChange={handleSearchChange}
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
          />
        </div>
        <Footer onFooterClick={handlePageChange} />
      </body>
    </html>
  );
}
