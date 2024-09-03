import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recherche pour:', searchTerm);
    // Implémentez ici la logique de recherche
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Rechercher des deals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 hover:bg-blue-600 transition-colors duration-300"
        >
          <FaSearch className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
