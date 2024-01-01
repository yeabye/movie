// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import MoviePage from './components/MoviePage';
import TVShowsPage from './components/TVShowsPage';
import LoginPage from './components/LoginPage';
import './App.css';
import SignupSimple from './components/SignupSimple';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
const Home = () => (
  <div className="content">
    <h2>Welcome to Movie Thriller!</h2>
    <p>Explore the latest and greatest movies and booked to watch.</p>
  </div>
);

const MoviesPage = () => (
  <div className="content">
    
    <MoviePage />
  </div>
);

const Login = () => (
  <div className="content">
    <h2>Login</h2>
    <p>Log in and dive into the world of movies.</p>
  </div>
);

const App = () => (
  <Router>
    <div className="app-container">
  
<nav>
  <ul>
    <div className="nav-left">
      <li>
        <Link to="/Home">Home</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
      <li>
        <Link to="/tvshows">TV Shows</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>
    </div>
    <div className="nav-right">
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </div>
  </ul>
</nav>

      <hr />

      <div className="main-content">
        <Routes>
          <Route path='/'element={<Navigate to="/home"/>}/>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/movies/*" element={<MoviesPage />} />
          <Route path="/tvshows" element={<TVShowsPage />} />
          <Route path="/signup" element={<SignupSimple />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
