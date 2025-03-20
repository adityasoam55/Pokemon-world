import React from 'react';
import { Link } from 'react-router-dom';

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

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/images/Pokemons.webp" 
                alt="Ash and Pikachu" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
                World Famous Pokemons are Alive Here!
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
              Pokémon is a Japanese media franchise that takes place in a shared universe in which humans co-exist with creatures known as Pokémon, a large variety of species endowed with special powers. The franchise's primary target audience is children aged 5 to 12, but it is known to attract people of all ages.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The franchise was created by Satoshi Tajiri in 1995, and is centered on fictional creatures called "Pokémon", which humans, known as Pokémon Trainers, catch and train to battle each other for sport.
              </p>
              <Link 
                to="/pokedex" 
                className="inline-block bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                See More...
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pokemon Types</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {pokemonTypes.map(type => (
              <div 
                key={type.name}
                className={`${type.color} rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow`}
              >
                <img src={`/images/types/${type.name}.png`} alt={type.name} className="w-16 h-16 mx-auto mb-2" />
                <p className="text-white font-medium capitalize">{type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pokemon Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Pokemon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredPokemon.map(pokemon => (
              <div key={pokemon.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className={`${pokemon.bgColor} h-40 flex items-center justify-center`}>
                  <img src={pokemon.image} alt={pokemon.name} className="h-32 w-32 object-contain" />
                </div>
                <div className="p-4">
                  <div className="text-gray-500 text-sm mb-1">#{pokemon.id.toString().padStart(3, '0')}</div>
                  <h3 className="text-xl font-bold capitalize mb-2">{pokemon.name}</h3>
                  <div className="flex gap-2">
                    {pokemon.types.map(type => (
                      <span 
                        key={type}
                        className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${typeColors[type]} capitalize`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-500 text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to become a Pokemon Master?</h2>
          <p className="text-xl mb-8">Explore our complete Pokedex and learn about all your favorite Pokemon!</p>
          <Link 
            to="/pokedex"
            className="bg-white text-red-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg inline-block"
          >
            Explore Now
          </Link>
        </div>
      </section>
    </div>
  );
};

// Pokemon Types data with appropriate Tailwind color classes
const pokemonTypes = [
  { name: 'fire', color: 'bg-orange-500' },
  { name: 'water', color: 'bg-blue-500' },
  { name: 'grass', color: 'bg-green-500' },
  { name: 'electric', color: 'bg-yellow-400' },
  { name: 'psychic', color: 'bg-pink-500' },
  { name: 'ice', color: 'bg-blue-300' },
  { name: 'dragon', color: 'bg-indigo-600' },
  { name: 'dark', color: 'bg-gray-700' },
  { name: 'fairy', color: 'bg-pink-300' },
  { name: 'normal', color: 'bg-gray-400' },
  { name: 'fighting', color: 'bg-red-600' },
  { name: 'flying', color: 'bg-indigo-400' },
  { name: 'poison', color: 'bg-purple-500' },
  { name: 'ground', color: 'bg-yellow-600' },
  { name: 'rock', color: 'bg-yellow-700' },
  { name: 'bug', color: 'bg-lime-500' },
  { name: 'ghost', color: 'bg-purple-600' },
  { name: 'steel', color: 'bg-gray-500' },
];

// Type colors mapping for featured Pokemon
const typeColors = {
  fire: 'bg-orange-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-400',
  psychic: 'bg-pink-500',
  ice: 'bg-blue-300',
  dragon: 'bg-indigo-600',
  dark: 'bg-gray-700',
  fairy: 'bg-pink-300',
  normal: 'bg-gray-400',
  fighting: 'bg-red-600',
  flying: 'bg-indigo-400',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  rock: 'bg-yellow-700',
  bug: 'bg-lime-500',
  ghost: 'bg-purple-600',
  steel: 'bg-gray-500',
};

// Featured Pokemon data
const featuredPokemon = [
  {
    id: 25,
    name: 'pikachu',
    types: ['electric'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 6,
    name: 'charizard',
    types: ['fire', 'flying'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    bgColor: 'bg-orange-100'
  },
  {
    id: 150,
    name: 'mewtwo',
    types: ['psychic'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
    bgColor: 'bg-pink-100'
  },
  {
    id: 149,
    name: 'dragonite',
    types: ['dragon', 'flying'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
    bgColor: 'bg-indigo-100'
  }
];

export default HomePage; 