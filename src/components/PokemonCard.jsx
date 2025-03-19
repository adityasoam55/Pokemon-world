import React from 'react';

const PokemonCard = ({ pokemon, onClick }) => {
  console.log(pokemon);
  if (!pokemon) return null;

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
      className={`rounded-xl shadow-lg overflow-hidden ${bgColor} transition-transform hover:scale-102 cursor-pointer max-w-100 hover:shadow-xl border border-white/20 card-shadow card-shadow-hover`}
      onClick={() => onClick(pokemon)}
    >
      <div className="p-4 sm:p-6 flex flex-col items-center w-52">
        <div className="bg-white/30 rounded-full p-2 mb-4 hover-bounce">
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
            alt={pokemon.name}
            className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
          />
        </div>
        
        <h2 className="text-lg sm:text-xl font-bold capitalize mb-1 text-center">
          {pokemon.name}
        </h2>
        <div className="text-sm font-semibold mb-1">#{pokemon.id.toString().padStart(3, '0')}</div>
        
        <div className="flex flex-wrap justify-center gap-2 my-2">
          {pokemon.types.map((typeInfo) => (
            <span 
              key={typeInfo.type.name}
              className="px-3 py-1 rounded-md text-xs font-semibold text-white bg-black/30 capitalize"
            >
              {typeInfo.type.name}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-1 mt-2 w-full text-xs sm:text-sm border-t border-white/30 pt-4">
          <div className="font-medium">Height: {pokemon.height / 10}m</div>
          <div className="font-medium">Weight: {pokemon.weight / 10}kg</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard; 