import React, { useState, useCallback } from 'react';
import { allCocktails } from '../../constants';

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cocktailLength = allCocktails.length;

  // Use useCallback to memoize the goToSlide function
  const goToSlide = useCallback((index) => {
    const newIndex = (index + cocktailLength) % cocktailLength;
    setCurrentIndex(newIndex);
  }, [cocktailLength]);

  const getCocktailAt = useCallback((indexOffset) => {
    return allCocktails[(currentIndex + indexOffset + cocktailLength) % cocktailLength];
  }, [currentIndex, cocktailLength]);

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading" className="py-10 bg-gray-900 text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Leaves */}
        <img
          src="/images/slider-left-leaf.png"
          alt="decorative left leaf"
          className="absolute top-0 left-0 h-20 md:h-24 lg:h-28"
          aria-hidden="true"
        />
        <img
          src="/images/slider-right-leaf.png"
          alt="decorative right leaf"
          className="absolute top-0 right-0 h-20 md:h-24 lg:h-28"
          aria-hidden="true"
        />

        <h2 id="menu-heading" className="sr-only">
          Cocktail Menu
        </h2>

        {/* Navigation Tabs */}
        <nav
          className="cocktail-tabs flex justify-center space-x-4 md:space-x-6 lg:space-x-8 py-6"
          aria-label="Cocktail Navigation"
        >
          {allCocktails.map((cocktail, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={cocktail.id}
                className={`rounded-full px-4 py-2 text-sm md:text-base lg:text-lg ${
                  isActive
                    ? 'text-white border-white'
                    : 'text-white/50 border-white/50'
                } hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-white`}
                onClick={() => goToSlide(index)}
              >
                {cocktail.name}
              </button>
            );
          })}
        </nav>

        {/* Content */}
        <div className="content relative">
          {/* Arrow Buttons */}
          <div className="arrow flex justify-between items-center absolute inset-x-0 top-0">
            <button
              className="text-left hover:text-white focus:outline-none focus:ring-2 focus:ring-white absolute top-1/2 left-0 transform -translate-y-1/2"
              onClick={() => goToSlide(currentIndex - 1)}
              aria-label={`View previous cocktail: ${prevCocktail.name}`}
            >
              <span className="mr-2 hidden sm:inline">{prevCocktail.name}</span>
              <img
                src="/images/right-arrow.png"
                alt="previous cocktail"
                aria-hidden="true"
                className="inline-block h-6 w-6"
              />
            </button>

            <button
              className="text-right hover:text-white focus:outline-none focus:ring-2 focus:ring-white absolute top-1/2 right-0 transform -translate-y-1/2"
              onClick={() => goToSlide(currentIndex + 1)}
              aria-label={`View next cocktail: ${nextCocktail.name}`}
            >
              <img
                src="/images/left-arrow.png"
                alt="next cocktail"
                aria-hidden="true"
                className="inline-block h-6 w-6"
              />
              <span className="ml-2 hidden sm:inline">{nextCocktail.name}</span>
            </button>
          </div>

          {/* Cocktail Image */}
          <div className="cocktail py-6">
            <img
              src={currentCocktail.image}
              alt={currentCocktail.name}
              className="object-contain mx-auto h-64 md:h-80 lg:h-96"
            />
          </div>

          {/* Recipe Section */}
          <div className="recipe text-center">
            <div className="info py-4">
              <p className="uppercase text-sm font-bold tracking-wide">Recipe for:</p>
              <p
                id="title"
                className="text-3xl sm:text-4xl md:text-2xl lg:text-3xl font-extrabold tracking-tight drop-shadow-lg mb-4 break-words bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent"
              >
                {currentCocktail.name}
              </p>
            </div>

            <div className="details px-4 py-6 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{currentCocktail.title}</h2>
              <p className="text-gray-300">{currentCocktail.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;