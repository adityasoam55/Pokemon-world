const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (limit = 20, offset = 0) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    
    // Fetch detailed data for each Pokemon
    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const detailResponse = await fetch(pokemon.url);
        return await detailResponse.json();
      })
    );
    
    return {
      count: data.count,
      next: data.next,
      previous: data.previous,
      results: pokemonDetails
    };
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    throw error;
  }
};

export const searchPokemons = async (query) => {
  try {
    // First get all pokemons (limited to 150 to avoid too many requests)
    const response = await fetch(`${BASE_URL}/pokemon?limit=150`);
    const data = await response.json();
    
    // Filter pokemons by name that includes the query
    const filteredPokemons = data.results.filter(pokemon => 
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    
    // Fetch detailed data for filtered pokemons
    const pokemonDetails = await Promise.all(
      filteredPokemons.map(async (pokemon) => {
        const detailResponse = await fetch(pokemon.url);
        return await detailResponse.json();
      })
    );
    
    return pokemonDetails;
  } catch (error) {
    console.error('Error searching Pokemon:', error);
    throw error;
  }
};

export const fetchPokemonById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching Pokemon with id ${id}:`, error);
    throw error;
  }
}; 