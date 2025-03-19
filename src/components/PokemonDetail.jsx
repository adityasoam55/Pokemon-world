import React from 'react';

const PokemonDetail = ({ pokemon, onClose }) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`max-w-4xl w-full rounded-lg shadow-2xl ${bgColor} bg-opacity-90 relative max-h-[90vh] overflow-y-auto`}>
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col md:flex-row p-6">
          {/* Left column: Image and basic info */}
          <div className="md:w-1/3 flex flex-col items-center md:border-r border-white border-opacity-20 pr-0 md:pr-6">
            <img 
              src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
              alt={pokemon.name}
              className="w-48 h-48 md:w-64 md:h-64 object-contain mb-4"
            />
            <h1 className="text-2xl md:text-3xl font-bold capitalize mb-2">{pokemon.name}</h1>
            <div className="text-xl mb-4">#{pokemon.id.toString().padStart(3, '0')}</div>
            
            <div className="flex gap-2 mb-4">
              {pokemon.types.map((typeInfo) => (
                <span 
                  key={typeInfo.type.name}
                  className="px-3 py-1 rounded-full text-sm font-semibold text-white bg-black/30 capitalize"
                >
                  {typeInfo.type.name}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 w-full text-sm">
              <div>Height: {pokemon.height / 10}m</div>
              <div>Weight: {pokemon.weight / 10}kg</div>
            </div>
          </div>
          
          {/* Right column: Stats and abilities */}
          <div className="md:w-2/3 pl-0 md:pl-6 mt-6 md:mt-0">
            <h2 className="text-xl font-bold mb-4">Base Stats</h2>
            <div className="space-y-3">
              {pokemon.stats.map(stat => (
                <div key={stat.stat.name} className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="capitalize">{stat.stat.name.replace('-', ' ')}</span>
                    <span>{stat.base_stat}</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-2.5">
                    <div 
                      className="bg-white h-2.5 rounded-full" 
                      style={{ width: `${Math.min(100, (stat.base_stat / 255) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-xl font-bold mt-6 mb-4">Abilities</h2>
            <div className="grid grid-cols-2 gap-2">
              {pokemon.abilities.map(ability => (
                <div 
                  key={ability.ability.name}
                  className="bg-white bg-opacity-20 p-2 rounded capitalize"
                >
                  {ability.ability.name.replace('-', ' ')}
                  {ability.is_hidden && <span className="text-xs ml-2">(Hidden)</span>}
                </div>
              ))}
            </div>
            
            <h2 className="text-xl font-bold mt-6 mb-4">Moves</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-2">
              {pokemon.moves.slice(0, 15).map(move => (
                <div 
                  key={move.move.name}
                  className="bg-white bg-opacity-20 p-2 rounded text-sm capitalize"
                >
                  {move.move.name.replace('-', ' ')}
                </div>
              ))}
              {pokemon.moves.length > 15 && (
                <div className="col-span-full text-center text-sm mt-2">
                  + {pokemon.moves.length - 15} more moves
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail; 