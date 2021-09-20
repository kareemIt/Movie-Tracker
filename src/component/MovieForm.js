import React, {useState} from "react";

const MovieForm = (prop) => {
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState("");
  const [duration, setDuration] = useState("");
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
    prop.setMovie(prop.movieList.concat({movie, rating, duration}));
    console.log(prop.movieList);
    setMovie("");
    setRating("");
    setDuration("");
  }

  return(
    <div>
        <p>movie name</p>
        <input 
        value={movie}
        className="movie-Name"
        onChange={movieName}
        />
        <p>movie rating</p>
        <input 
        value={rating}
        className="movie-rating"
        onChange={movieRating}
        />
        <p>movie duration</p>
        <input 
        value={duration}
        className="movie-duration"
        onChange={movieDuration}
        />
        <button onClick={Sumbit}>Sumbit</button>
    </div>  
  );
};
export default MovieForm;