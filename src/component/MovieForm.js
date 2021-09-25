import React, { useState, useEffect } from 'react';

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
    setDuration(e.target.value);
  }

  useEffect(() => {
    if (Number(rating) > 100) {
      setRating(100);
    }
    if (Number(rating) < 0) {
      setRating(0);
    }
  }, [rating]);

  function Sumbit() {
    let hours = 0;
    const durationLength = Number(duration.substring(0, duration.length - 1));
    const durationType = duration.substring(duration.length - 1);

    if (durationType == 'm') {
      hours = durationLength / 60;
      setDuration(hours);
    }

    if (durationType == 'h') {
      hours = durationLength;
      setDuration(hours);
    }

    const newDuration =
      duration.indexOf('m') == -1
        ? durationLength
        : (durationLength / 60).toFixed(2);

    prop.setMovie(
      prop.movieList.concat({
        movie,
        rating,
        duration: newDuration,
      })
    );
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
        {}
        <button onClick={Sumbit}>Sumbit</button>
      </div>
    </div>
  );
};
export default MovieForm;
