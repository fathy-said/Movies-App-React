import React from 'react';
import './BoxMovie.css'
import { Movie } from "../index"
const BoxMovie = ({ children }) => {
  return (
    <div className='row'>
      {
        children
      }
    </div>
  );
}

export default BoxMovie;

