import React, { useState } from 'react';

const MovieForm = (prop) => {
  const [movie, setMovie] = useState('');
  const [rating, setRating] = useState('');
  const [duration, setDuration] = useState('');

  function movieName(e) {
    setMovie(e.target.value);
  }

  function movieRating(e) {
    setRating(e.target.value);
  }

  function movieDuration(e) {
    const duration = e.target.value.substring(e.target.value.length);
    const hours = 0;
    //ask derick
    if (duration.substring(duration.length - 1) == 'm') {
      hours = duration / 60;
    }
    if (duration.substring(duration.length - 1) == 'h') {
      hours = duration;
    }

    setDuration(hours);
  }

  function Sumbit() {
    if (rating > 100) {
      //ask derick
      setRating(100);
    }
    if (rating < 0) {
      setRating(0);
    }
    prop.setMovie(prop.movieList.concat({ movie, rating, duration }));
    setMovie('');
    setRating('');
    setDuration('');
  }

  return (
    <div className="inner-input-container">
      <div className="inner-input">
        <p>Movie name</p>
        <input value={movie} className="movie-Name" onChange={movieName} />
        <p>Movie rating</p>
        <input
          value={rating}
          type="number"
          min="0"
          max="100"
          className="movie-rating"
          onChange={movieRating}
        />
        <p>Movie duration</p>
        <input
          value={duration}
          className="movie-duration"
          onChange={movieDuration}
        />
        <button onClick={Sumbit}>Sumbit</button>
      </div>
    </div>
  );
};
export default MovieForm;
