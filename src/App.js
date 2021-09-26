import React, { useState } from 'react';
import MovieForm from './component/MovieForm';
import MovieList from './component/MovieList';
import Search from './component/Search';
import './style.css';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');
  const searchValue = (e) => {
    setInput(e.target.value);
  };

  function filter() {
    movies.movie(
      input.filter((input, index) => input.indexOf(movies.movie))
    );
  }

  console.log(input);
  return (
    <div className="container">
      <div className="input-fields">
        <MovieForm movies={movies} setMovie={setMovies} />
        <div className="output-fields">
          <Search onChange={searchValue} />
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}
