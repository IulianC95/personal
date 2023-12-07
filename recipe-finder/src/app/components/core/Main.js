/* eslint-disable jsx-a11y/alt-text */
const imgPath = '../../../images/';
const items = [
  {
    title: 'Soups',
    imgSrc: `${imgPath}soup.png`,
    href: 'https://www.google.ro/',
  },
  {
    title: 'BBQ',
    imgSrc: `${imgPath}bbq.png`,
    href: 'https://www.google.ro/',
  },
  {
    title: 'Vegetarian',
    imgSrc: `${imgPath}vegetarian-1.png`,
    href: 'https://www.google.ro/',
  },
  {
    title: 'Breakfast',
    imgSrc: `${imgPath}breakfast.png`,
    href: 'https://www.google.ro/',
  },
  {
    title: 'Burgers',
    imgSrc: `${imgPath}burgers.png`,
    href: 'https://www.google.ro/',
  },
  {
    title: 'Desert',
    imgSrc: `${imgPath}desert.png`,
    href: 'https://www.google.ro/',
  },
  {
    title: 'Pizza',
    imgSrc: `${imgPath}pizza.png`,
    href: 'https://www.google.ro/',
  },
  {
    title: 'Pies',
    imgSrc: `${imgPath}pies.png`,
    href: 'https://www.google.ro/',
  },
  {
    title: 'Smoothies',
    imgSrc: `${imgPath}smoothies.png`,
    href: 'https://www.google.ro/',
  },
  {
    title: 'Sauces',
    imgSrc: `${imgPath}sauces.png`,
    href: 'https://www.google.ro/',
  },
  {
    title: 'Pasta',
    imgSrc: `${imgPath}pasta.png`,
    href: 'https://www.google.ro/',
  },
  {
    title: 'Seafood',
    imgSrc: `${imgPath}seafood.png`,
    href: 'https://www.google.ro/',
  },
];
export default function Main() {
  function getPositionClass(index) {
    if (index % 3 === 0) return 'align-left';
    if (index % 3 === 1) return 'align-center';
    return 'align-right';
  }

  return (
    <main className="bg-[var(--main-bg)] min-h-screen">
      <div className="container flex justify-between pt-6 px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-24 mb-9 rounded-lg ${getPositionClass(index)}`}
          >
            <a
              href={item.href}
              title={item.title}
              className="flex flex-col items-center justify-center"
            >
              <picture>
                <img src={item.imgSrc} className="w-24" alt={item.title} />
              </picture>
              <div className="h-10 w-full bg-[var(--bg-secondary)] rounded-b-lg flex items-center justify-center">
                <h2 className="text-center font-bodoni font-bold text-base text-[var(--primary)]">
                  {item.title}
                </h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
