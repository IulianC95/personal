/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';

export default function Header({
  onPageChange,
  onSearchChange,
  setShowIOSInstructions,
  showIOSInstructions,
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearchChange(newSearchTerm);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(
          `Eroare la încercarea de a intra în modul fullscreen: ${e.message} (${e.name})`,
        );
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  };

  const handlePlusClick = () => {
    if (isIOS()) {
      // Afisează instructiunile pentru iOS
      setShowIOSInstructions(true);
    } else {
      // Logica pentru declansarea prompt-ului pe dispozitive non-iOS
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
    <header className="shadow sticky top-0 left-0 right-0 z-50 grid gap-8 bg-[var(--bg-secondary)] px-4 pb-3">
      <section className="flex justify-between pt-2">
        <FontAwesomeIcon
          icon={faCirclePlus}
          className="text-3xl w-8 text-[var(--primary)] self-center"
          onClick={handlePlusClick}
        />
        {showIOSInstructions && (
          <div
            className={`ios-instructions ${
              showIOSInstructions ? 'flex' : 'hidden'
            } fixed inset-0 bg-black bg-opacity-50 justify-center items-center`}
          >
            <div className="bg-[var(--bg-secondary)] p-4 rounded-lg max-w-sm mx-auto">
              <p className="text-lg font-semibold mb-4 text-[var(--primary)]">
                To add this app to your home screen:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Open Safari and navigate to the web address of the app.</li>
                <li>Tap the share button in the navigation bar.</li>
                <li>Select Add to Home Screen.</li>
              </ol>

              <button
                onClick={() => setShowIOSInstructions(false)}
                className="mt-4 px-4 py-2 bg-[var(--primary)] text-white rounded hover:bg-blue-600 transition duration-200"
              >
                OK
              </button>
            </div>
          </div>
        )}

        <h1 className="text-2xl font-bodoni self-center font-extrabold text-[var(--primary)]">
          Recipe Finder
        </h1>

        <FontAwesomeIcon
          icon={faMaximize}
          className="text-2xl w-8 text-[var(--primary)] self-center"
          onClick={toggleFullScreen}
        />
      </section>

      <section className="flex justify-between">
        <button
          className="text-ellipsis bg-[var(--primary)] rounded-lg text-sm text-white inter w-4/5"
          onClick={() => onPageChange('cookPage')}
        >
          What can I cook?
        </button>
        <div className="input-container z-10">
          <input
            type="text"
            name="text"
            className="input"
            placeholder="Search something..."
            autoComplete="off"
            value={searchTerm}
            onChange={handleChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=""
            viewBox="0 0 24 24"
            className="icon"
          >
            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              id="SVGRepo_tracerCarrier"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <rect fill="white" height="24" width="24"></rect>{' '}
              <path
                fill=""
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>{' '}
            </g>
          </svg>
        </div>
      </section>
      <section className="flex justify-between">
        <div className="flex w-full justify-around self-center">
          <a href="/">
            <picture>
              <img
                src="../../../images/romania.png"
                className="w-8 grayscale"
                alt="Romanian - coming soon"
              ></img>
            </picture>
          </a>

          <a href="/">
            <picture>
              <img
                src="../../../images/united-kingdom.png"
                className="w-8"
                alt="English"
              ></img>
            </picture>
          </a>

          <a href="/">
            <picture>
              <img
                src="../../../images/france.png"
                className="w-8 grayscale"
                alt="French  - coming soon"
              ></img>
            </picture>
          </a>

          <a href="/">
            <picture>
              <img
                src="../../../images/germany.png"
                className="w-8 grayscale"
                alt="German  - coming soon"
              ></img>
            </picture>
          </a>

          <a href="/">
            <picture>
              <img
                src="../../../images/spain.png"
                className="w-8 grayscale"
                alt="Spanish  - coming soon"
              ></img>
            </picture>
          </a>
        </div>
      </section>
    </header>
  );
}
