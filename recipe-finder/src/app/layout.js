'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/core/Header';
import { Bodoni_Moda } from 'next/font/google';
import Footer from './components/core/Footer';
import Main from './components/core/Main';
import React, { useState } from 'react';
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
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="max-w-xl mx-auto min-h-screen flex flex-col">
        <Header onPageChange={handlePageChange} />
        <div className="bg-[var(--main-bg)] flex-grow">
          <Main activePage={activePage} onCategorySelect={handlePageChange} />
        </div>
        <Footer onFooterClick={handlePageChange} />
      </body>
    </html>
  );
}
