import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

export default function Footer({ onFooterClick }) {
  const [activeElement, setActiveElement] = useState('home');

  const handleFooterClick = (element) => {
    setActiveElement(element);
    onFooterClick(element);
  };

  const isActive = (element) => {
    return activeElement === element ? 'active-class' : '';
  };
  return (
    <footer className="grid sticky w-screen bottom-0 left-0 right-0 z-50 h-16 bg-[var(--bg-secondary)] shadow-top max-w-xl center m-auto">
      <div className="flex justify-between px-4 self-center pt-2">
        {/* Home */}
        <div
          className={`self-center text-center`}
          onClick={() => handleFooterClick('home')}
        >
          <FontAwesomeIcon
            icon={faHouse}
            className={`text-2xl w-8 text-[var(--primary)] ${isActive('home')}`}
          />
          <p className="font-bodoni text-[var(--primary)]">Home</p>
        </div>

        {/* Favorites */}
        <div
          className={`self-center text-center `}
          onClick={() => handleFooterClick('favorites')}
        >
          <FontAwesomeIcon
            icon={faStar}
            className={`text-2xl w-8 text-[var(--primary)] ${isActive(
              'favorites',
            )}`}
          />
          <p className="font-bodoni text-[var(--primary)]">Favorites</p>
        </div>

        {/* About Us */}
        <div
          className={`self-center text-center `}
          onClick={() => handleFooterClick('about')}
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            className={`text-2xl w-8 text-[var(--primary)] ${isActive(
              'about',
            )}`}
          />
          <p className="font-bodoni text-[var(--primary)]">About us</p>
        </div>

        {/* Contact */}
        <div
          className={`self-center text-center `}
          onClick={() => handleFooterClick('contact')}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`text-2xl w-8 text-[var(--primary)] ${isActive(
              'contact',
            )}`}
          />
          <p className="font-bodoni text-[var(--primary)]">Contact</p>
        </div>
      </div>
    </footer>
  );
}
