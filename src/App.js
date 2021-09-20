import React, { useState } from 'react';
import MovieForm from './component/MovieForm';
import MovieList from './component/MovieList';
import Search from './component/Search';
import './style.css';

export default function App() {
  const [movieList, setMovieList] = useState([]);

  return (
    <div>
      <div className="input-fields">
        <MovieForm movieList={movieList} setMovie={setMovieList} />
        <div>
          <Search />
          <MovieList movieList={movieList} />
        </div>
      </div>
    </div>
  );
}
