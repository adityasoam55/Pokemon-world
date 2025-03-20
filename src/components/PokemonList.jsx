import React, { useState, useEffect } from 'react';
import { fetchPokemonDetails } from '../services/api';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons, onSelectPokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  // Type colors mapping
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

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      try {
        const detailsPromises = pokemons.map(pokemon => {
          // Extract ID from the URL
          const id = pokemon.url.split('/').filter(Boolean).pop();
          return fetchPokemonDetails(id);
        });
        
        const details = await Promise.all(detailsPromises);
        setPokemonDetails(details);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (pokemons.length > 0) {
      getDetails();
    }
  }, [pokemons]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-pulse">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 h-56">
            <div className="bg-gray-200 h-32 rounded mb-4"></div>
            <div className="bg-gray-200 h-4 rounded mb-2"></div>
            <div className="bg-gray-200 h-4 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
      {pokemonDetails.map(pokemon => {
        // Get the primary type for background color
        const mainType = pokemon.types[0]?.type.name || 'normal';
        
        // Map of type to tailwind color
        const typeColors = {
          normal: 'bg-gray-300',
          fire: 'bg-orange-400',
          water: 'bg-blue-400',
          electric: 'bg-yellow-300',
          grass: 'bg-green-400',
          ice: 'bg-blue-200',
          fighting: 'bg-red-500',
          poison: 'bg-purple-500',
          ground: 'bg-yellow-600',
          flying: 'bg-indigo-300',
          psychic: 'bg-pink-400',
          bug: 'bg-lime-400',
          rock: 'bg-yellow-700',
          ghost: 'bg-purple-700',
          dragon: 'bg-indigo-600',
          dark: 'bg-gray-700',
          steel: 'bg-gray-400',
          fairy: 'bg-pink-300',
        };
        
        const bgColor = typeColors[mainType] || 'bg-gray-300';
        
        return (
          <div 
            key={pokemon.id}
            className={`${bgColor} rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
            onClick={() => onSelectPokemon(pokemon)}
          >
            <div className="p-4 flex flex-col items-center">
              <img 
                src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                alt={pokemon.name}
                className="h-32 w-32 object-contain mb-4"
              />
              <p className="text-gray-800 text-sm">#{pokemon.id.toString().padStart(3, '0')}</p>
              <h3 className="text-lg font-bold capitalize mb-2">{pokemon.name}</h3>
              <div className="flex gap-2">
                {pokemon.types.map(typeInfo => (
                  <span 
                    key={typeInfo.type.name}
                    className="px-2 py-1 rounded-full text-xs font-semibold text-white bg-black/30 capitalize"
                  >
                    {typeInfo.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList; 