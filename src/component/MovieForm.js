import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [duration, setDuration] = useState('');

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleRatingChange(e) {
    const num = Math.max(0, Math.min(Number(e.target.value), 100));
    setRating(num);
  }

  function handleDurationChange(e) {
    setDuration(e.target.value);
  }

  function getHoursFromText(text) {
    const duration = Number(text.slice(0, -1));
    const type = text[text.length - 1];
    if (type == 'h') return duration;
    if (type == 'm') return duration / 60;

    throw new Error('invalid type');
  }

  function submit(e) {
    e.preventDefault();

    if (rating == '' || duration == '' || title == '') return;
    const hours = getHoursFromText(duration);

    addMovie({
      title,
      rating,
      duration: hours.toFixed(2),
    });
    setTitle('');
    setRating('');
    setDuration('');
  }

  return (
    <div className="inner-input-container">
      <form onSubmit={submit} className="inner-input">
        <p>Movie name</p>
        <input
          value={title}
          className="movie-name"
          onChange={handleTitleChange}
        />
        <p>Movie rating</p>
        <input
          value={rating}
          type="number"
          min="0"
          max="100"
          className="movie-rating"
          onChange={handleRatingChange}
        />
        <p>Movie duration m/h</p>
        <input
          value={duration}
          className="movie-duration"
          onChange={handleDurationChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default MovieForm;
