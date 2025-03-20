const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (limit = 20, offset = 0) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
};

export const fetchPokemonDetails = async (idOrName) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${idOrName}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching details for Pokemon ${idOrName}:`, error);
    throw error;
  }
};

export const searchPokemons = async (query) => {
  try {
    // If the query is a number, try to fetch by ID
    if (/^\d+$/.test(query)) {
      try {
        const pokemon = await fetchPokemonDetails(query);
        return [{ name: pokemon.name, url: `${BASE_URL}/pokemon/${pokemon.id}/` }];
      } catch (error) {
        // If not found by ID, continue with name search
        console.log('Pokemon not found by ID, trying name search');
      }
    }
    
    // Lowercasing the query for case-insensitive search
    const lowercaseQuery = query.toLowerCase();
    
    // Fetch a larger set to search through
    const response = await fetch(`${BASE_URL}/pokemon?limit=2000`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    
    // Filter results by name containing the query
    return data.results.filter(pokemon => 
      pokemon.name.includes(lowercaseQuery)
    );
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