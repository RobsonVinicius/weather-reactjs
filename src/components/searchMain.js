import React from 'react';
import './searchMain.css';

function searchMain() {
  return (
    <div className='wrap'>
      <div className='search'>
        <input type='search' placeholder='type city name...' id='search'/>
      </div>
      <button className='searchButton'>Search</button>
    </div>
  );
}

export default searchMain;
