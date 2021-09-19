import React, {useState} from "react";

const MovieForm = () => {
  const[movie, setMovie] = useState("");
  const[rating, setRating] = useState("");
  const[duration , setDuration] = useState("");

  return(
    <div>
        <p>input movie name</p>
        <input className="movie-Name"/>
        <p>input movie rating</p>
        <input className="movie-rating"/>
        <p>input movie duration</p>
        <input className="movie-duration"/>
    </div>  
  );
};
export default MovieForm;