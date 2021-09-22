import React, {useState} from "react";

const MovieList = (prop) => {
  return(
    <div className="movie-list">
      {prop.movieList.map((movie, index) => {
        return(
          <div className="individual-movie" key={index}>
            <p>{movie.movie}</p>
            <p>{movie.rating}/100</p>
            <p>{movie.duration}.Hrs</p>
          </div>
        );
      })}
    </div>  
  );
};
export default MovieList;