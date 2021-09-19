import React, {useState} from "react";

const MovieList = (prop) => {
  return(
    <div className="movie-list">
      {prop.movieList.map((movie, index) => {
        return(
          <div className="individual-movie" key={index}>
           {movie.movie} {movie.rating} {movie.duration}
          </div>
        );
      })}
    </div>  
  );
};
export default MovieList;