import React, { useState } from 'react';
import MovieForm from "./component/MovieForm";
import './style.css';

export default function App() {
  const[name, setName] = useState("");

  return (
    <div>
      <div className="input-fields">
        <MovieForm/>
          
        </div>
    </div>
  );
}
