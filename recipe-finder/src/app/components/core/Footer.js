import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-[var(--bg-secondary)] shadow-top max-w-xl center m-auto">
      <div className="flex justify-between px-4 self-center pt-2">
        <div className="self-center">
          <a
            href="/"
            title=""
            className="flex flex-col justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faHouse}
              className="w-9 text-[var(--primary)]"
            />
            <p className="font-bodoni text-[var(--primary)]">Home</p>
          </a>
        </div>
        <div className="self-center">
          <a
            href="/"
            title=""
            className="flex flex-col justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faStar}
              className="w-9 text-[var(--primary)]"
            />
            <p className="font-bodoni text-[var(--primary)]">Favorites</p>
          </a>
        </div>
        <div className="self-center">
          <a
            href="AboutUs.js"
            title=""
            className="flex flex-col justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="w-8 text-[var(--primary)]"
            />
            <p className="font-bodoni text-[var(--primary)]">About us</p>
          </a>
        </div>
        <div className="self-center">
          <a
            href="/"
            title=""
            className="flex flex-col justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-8 text-[var(--primary)]"
            />
            <p className="font-bodoni text-[var(--primary)]">Contact</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
