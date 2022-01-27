import React, { useState } from 'react';
import './SearchMain.css';
import WeatherDetails from './WeatherDetails';

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState('mumbai');
  console.log(searchTerm);

  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <input 
            type='search' 
            placeholder='type city name...' 
            id='search' 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className='searchButton'>Search</button>
      </div>
      <WeatherDetails />
    </>
  );
}

export default SearchMain;
