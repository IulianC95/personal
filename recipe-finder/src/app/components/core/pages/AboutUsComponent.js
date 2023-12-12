import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function AboutUs() {
  return (
    <div className="flex flex-col text-center pt-10 px-4 bg-[var(--main-bg)] gap-10 site-main">
      <div className="flex flex-col gap-2 fadeIn">
        <FontAwesomeIcon
          className="text-4xl text-[var(--primary)]"
          icon={faFaceSmile}
        />
        <p className="text-base font-candal text-[var(--primary)] font-bold">
          Welcome to Recipe Finder, the innovative app designed to transform
          your at-home ingredients into delicious meals with just a few taps.
        </p>
      </div>
      <div className="flex flex-col gap-2 fadeIn fadeInDelay1">
        <FontAwesomeIcon
          icon={faBookOpen}
          className="text-4xl text-[var(--primary)]"
        />
        <p className="text-base font-candal text-[var(--primary)] font-bold">
          Whether you are looking to whip up a quick dinner with what you have
          in the fridge or planning a gourmet meal, our app is your go-to
          culinary companion.
        </p>
      </div>
      <div className="flex flex-col gap-2 fadeIn fadeInDelay2">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-4xl text-[var(--primary)]"
        />
        <p className="text-base font-candal text-[var(--primary)] font-bold">
          Recipe Finder is more than just a recipe app. It is a smart kitchen
          tool that suggests recipes based on the ingredients you already own,
          reducing food waste and saving you time.
        </p>
      </div>
      <div className="flex flex-col gap-2 fadeIn fadeInDelay3">
        <FontAwesomeIcon
          icon={faThumbsUp}
          className="text-4xl text-[var(--primary)]"
        />
        <p className="text-base font-candal text-[var(--primary)] font-bold">
          Dive into our vast collection of recipes, from traditional dishes to
          modern twists on classics, and find inspiration for every meal, every
          day.
        </p>
      </div>
    </div>
  );
}
