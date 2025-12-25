    import React, { useState } from 'react';
    import "./search.css";

    function SearchProdct({setSearchItem}) {
      const [searchTerm, setSearchTerm] = useState('');

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Searching for: ${searchTerm}`);
        setSearchItem(searchTerm)
      };


      return (
        <form onSubmit={handleSubmit} className='search-form' >
         <span>Search for products:</span>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit"  className="search-button">Search</button>
        </form>
      );
    }

    export default SearchProdct;
