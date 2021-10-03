import React, { useState, useEffect } from 'react';
import MovieForm from './component/MovieForm';
import MovieList from './component/MovieList';
import Search from './component/Search';
import './style.css';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const newMovies = movies.filter((movieData) =>
      movieData.title.includes(input)
    );
    setFilteredMovies(newMovies);
  }, [input, movies]);

  const searchValue = (e) => {
    setInput(e.target.value);
  };

  const addMovie = (movie) => {
    setMovies((oldMovies) => [...oldMovies, movie]);
  };

  return (
    <div className="container">
      <div className="input-fields">
        <MovieForm addMovie={addMovie} />
        <div className="output-fields">
          <Search onChange={searchValue} />
          <MovieList movies={filteredMovies} />
        </div>
      </div>
    </div>
  );
}
