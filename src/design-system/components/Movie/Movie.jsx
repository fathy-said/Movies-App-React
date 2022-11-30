import React from 'react';
import "./Movie.css"
import { AiOutlineStar } from "react-icons/ai";
const Movie = ({ image, title, description, vote }) => {
  return (
    <>
      <div className="box">
        <div className="box-img" >
          <span className='star'>
            <AiOutlineStar /> {vote}
          </span>
          <span className='play'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAT9JREFUaEPtmT0KwkAQRmcOIN7LI3iXoKfIEbSwVrDNcSzS2ImyosRKsQjz87H72WfYt+8pGVRp7KON8QqBazdOwzRc2Q0w6cqEfuHQMA1XdgNMujKh/NEySXq9um6LymV/XPTohZgBi+hGRAaR0u1OiwEV3Br4zami/e1x7w7n5YgG7gI8QY5FS4eWuSfwRy5U5hHAUJmHAaNkHg2cnnkWcFrmqcAZmSMAh2aOBBySORywd+aowG6ZowObZ07gOdvNax+e1sM5j/97xvw9HNWw26YFB+y9SyMBm+f767uCAOyWLxywd75IwCH5IgCH5psKnJFvFnBavtHA6fmGAaPkGwEMla8rcFN/plmvSJ7zTF4tPQ9oPZvA1jeKNo+G0YxYn4eGrW8UbR4NoxmxPg8NW98o2jwaRjNifZ7mDD8BUzXsPXLslF4AAAAASUVORK5CYII=" />
          </span>
          <img className='img-card' src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
        </div>
        <h4>{title}</h4>
      </div>
    </>
  );
}

export default Movie;
