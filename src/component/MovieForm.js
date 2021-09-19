import React, {useState} from "react";

const MovieForm = (prop) => {
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState("");
  const [duration , setDuration] = useState("");
  const [movies, setMovies] = useState([]);

  function movieName (e) {
    setMovie(e.target.value);
  }

  function movieRating (e) {
    setRating(e.target.value);
  }

  function movieDuration (e) {
    setDuration(e.target.value);
  }

  function Sumbit () {
    prop.setMovie(movies.concat({movie, rating, duration}));
  }

  return(
    <div>
        <p>input movie name</p>
        <input 
        className="movie-Name"
        onChange={movieName}
        />
        <p>input movie rating</p>
        <input 
        className="movie-rating"
        onChange={movieRating}
        />
        <p>input movie duration</p>
        <input 
        className="movie-duration"
        onChange={movieDuration}
        />
        <button onClick={Sumbit}>Sumbit</button>
    </div>  
  );
};
export default MovieForm;