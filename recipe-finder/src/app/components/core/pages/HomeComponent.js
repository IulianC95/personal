/* eslint-disable jsx-a11y/alt-text */

'use client';

import React, { useEffect } from 'react';

const imgPath = '../../../images/';
const items = [
  {
    title: 'Soups',
    imgSrc: `${imgPath}soup.png`,
    categoryId: 'soups',
  },
  {
    title: 'BBQ',
    imgSrc: `${imgPath}bbq.png`,
    categoryId: 'bbq',
  },
  {
    title: 'Vegetarian',
    imgSrc: `${imgPath}vegetarian-1.png`,
    categoryId: 'vegetarian',
  },
  {
    title: 'Breakfast',
    imgSrc: `${imgPath}breakfast.png`,
    categoryId: 'breakfast',
  },
  {
    title: 'Burgers',
    imgSrc: `${imgPath}burgers.png`,
    categoryId: 'burgers',
  },
  {
    title: 'Desert',
    imgSrc: `${imgPath}desert.png`,
    categoryId: 'desert',
  },
  {
    title: 'Pizza',
    imgSrc: `${imgPath}pizza.png`,
    categoryId: 'pizza',
  },
  {
    title: 'Pies',
    imgSrc: `${imgPath}pies.png`,
    categoryId: 'pies',
  },
  {
    title: 'Smoothies',
    imgSrc: `${imgPath}smoothies.png`,
    categoryId: 'smoothies',
  },
  {
    title: 'Sauces',
    imgSrc: `${imgPath}sauces.png`,
    categoryId: 'sauces',
  },
  {
    title: 'Pasta',
    imgSrc: `${imgPath}pasta.png`,
    categoryId: 'pasta',
  },
  {
    title: 'Seafood',
    imgSrc: `${imgPath}seafood.png`,
    categoryId: 'seafood',
  },
];
export default function HomeComponent({ onCategorySelect }) {
  useEffect(() => {
    const container = document.querySelector('.container');
    if (container) {
      setTimeout(() => {
        container.style.opacity = '1';
        document.querySelectorAll('.container .w-24').forEach((div) => {
          div.style.left = '0';
          div.style.opacity = '1';
        });
      }, 200);
    }
  }, []);
  function getPositionClass(index) {
    if (index % 3 === 0) return 'align-left';
    if (index % 3 === 1) return 'align-center';
    return 'align-right';
  }

  return (
    <main className="bg-[var(--main-bg)] mb-9 flex-grow site-main">
      <div className="container flex justify-between pt-6 px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-24 mb-9 rounded-lg ${getPositionClass(index)}`}
            onClick={() => onCategorySelect(item.categoryId)}
          >
            <div className="flex flex-col items-center justify-center">
              <picture>
                <img src={item.imgSrc} className="w-24" alt={item.title} />
              </picture>
              <div className="h-10 w-full bg-[var(--bg-secondary)] rounded-b-lg flex items-center justify-center">
                <h2 className="text-center font-bodoni font-bold text-base text-[var(--primary)]">
                  {item.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
