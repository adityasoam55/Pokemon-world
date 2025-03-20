import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedPokemon from './FeaturedPokemon';
import TypesSection from './TypesSection';
import AboutPokemon from './AboutPokemon';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap-reverse max-md:gap-10 items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-red-500 mb-4">"Gotta Explore Them All..."</h2>
            <h1 className="text-3xl md:text-5xl text-gray-800 mb-4">Welcome to the World of</h1>
            <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-6">Pokemon</h1>
            <p className="text-lg text-gray-700 mb-8">World's Famous Pokemon Collection At One Place</p>

            <div className="flex space-x-4">
              <Link
                to="/pokedex"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Explore Pokedex
              </Link>
              <Link
                to="/about"
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 ">
            <img
              src="/images/Pikachu1.png"
              alt="Pokemons"
              className="w-full mx-auto"
            />
          </div>
        </div>
      </section>

      <AboutPokemon />
      <TypesSection />
      <FeaturedPokemon />
    </div>
  );
};

export default HomePage; 