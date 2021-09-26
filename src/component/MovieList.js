import React, { useState } from 'react';

const MovieList = (prop) => {
  return (
    <div className="movie-list">
      {prop.movies.map((movie, index) => {
        return (
          <div className="individual-movie" key={index}>
            <p>{movie.movie}</p>
            <p>{movie.rating}/100</p>
            <p>{movie.duration} hrs</p>
          </div>
        );
      })}
    </div>
  );
};
export default MovieList;
