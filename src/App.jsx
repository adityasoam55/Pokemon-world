import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Pokedex from './components/Pokedex';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { fetchPokemons, searchPokemons } from './services/api';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  
  const pokemonsPerPage = 20;

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (searchQuery) {
          // If searching, use search API
          const searchResults = await searchPokemons(searchQuery);
          setPokemons(searchResults);
          setTotalPages(1); // Search results are on one page
          setIsSearching(true);
        } else {
          // If not searching, use pagination API
          const offset = (currentPage - 1) * pokemonsPerPage;
          const data = await fetchPokemons(pokemonsPerPage, offset);
          setPokemons(data.results);
          setTotalPages(Math.ceil(data.count / pokemonsPerPage));
          setIsSearching(false);
        }
      } catch (err) {
        setError('Failed to load Pokémon data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPokemons();
  }, [currentPage, searchQuery]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
    // Add overflow hidden to body when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetail = () => {
    setSelectedPokemon(null);
    // Restore overflow when modal is closed
    document.body.style.overflow = 'auto';
  };

  // Handle escape key to close detail view
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && selectedPokemon) {
        handleCloseDetail();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedPokemon]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={
          <Pokedex 
            pokemons={pokemons}
            loading={loading}
            error={error}
            searchQuery={searchQuery}
            currentPage={currentPage}
            totalPages={totalPages}
            onSearch={handleSearch}
            onPageChange={handlePageChange}
            onSelectPokemon={handleSelectPokemon}
            selectedPokemon={selectedPokemon}
            onCloseDetail={handleCloseDetail}
          />
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
