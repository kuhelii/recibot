import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Mainpage = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/search?q=${search}`); 
    }
  };

  return (
    <div className='search-section'>
      <h2>Search Your Favorite Dishes</h2>
      <div className="search-container">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search for dishes..." 
            value={search}
            onChange={handleInput}
          />
          <button className="btn" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;



