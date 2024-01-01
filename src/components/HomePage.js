// src/components/HomePage.js

import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h2>Welcome to Movie World!</h2>
        <p className="movie-description">
          Explore a vast collection of movies and TV shows. Find your favorite entertainment
          and discover new releases.
        </p>

        <div className="search-container">
          <input type="text" placeholder="Search movies and TV shows" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
