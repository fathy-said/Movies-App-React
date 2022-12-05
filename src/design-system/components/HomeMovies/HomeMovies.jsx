import React, { useEffect, useState, useRef } from 'react';
import "./HomeMovies.css"
import { BoxMovie, Movie } from "../index"
import { useDispatch, useSelector } from 'react-redux';
import { getTopRatedThunk } from "../../RTX/Thunk/getTopRatedThunk"
import { geMoviesThunk } from "../../RTX/Thunk/getMoviesThunk"
import { getTvThunk } from "../../RTX/Thunk/getTvThunk"
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

const HomeMovies = () => {
  let { dataTop, } = useSelector((state) => state.TopRated)
  let { dataMovie, } = useSelector((state) => state.moviesSlice)
  let { dataTv } = useSelector((state) => state.tvSlice)
  let [getActive, setActive] = useState("top");
  let [movies, setMovies] = useState([]);
  let dispatch = useDispatch()
  const shouldData = useRef(true)
  useEffect(() => {
    if (shouldData.current) {
      dispatch(getTopRatedThunk())
      dispatch(geMoviesThunk())
      dispatch(getTvThunk())
      shouldData.current = false
    }
  }, []);
  const shouldtopRated = useRef(true)
  useEffect(() => {
    if (dataTop.length > 0 && getActive === "top") {
      if (shouldtopRated.current) {
        setMovies(dataTop)
        shouldtopRated.current = false
      }
    }

  }

    , [dataTop]);




  return (
    <div className="container">


      <div className='home-movies' >
        <div className="box-title">
          <span className={getActive === 'top' ? "active" : ''} onClick={() => {
            setActive("top")
            setMovies(dataTop)
            dispatch(getTopRatedThunk())
          }}

          >
            top rated

          </span>
          <span className={getActive === 'movies' ? "active" : ''} onClick={() => {


            setActive("movies")
            setMovies(dataMovie)

          }}>
            Movies
          </span>
          <span className={getActive === 'tv' ? "active" : ''} onClick={() => {
            setActive("tv")
            dispatch(getTvThunk())
            setMovies(dataTv)

          }}>
            TV shows
          </span>
        </div>
        <span className='data-number'>
          {getActive} <span>
            ({
              movies.length
            })
          </span>
        </span>
        <BoxMovie>
          {
            movies.length ? (movies.map((el) => {
              if (el.original_title) {
                return (
                  <Link to={'/detail/' + (getActive === 'top' ? 'movie' : getActive === 'tv' ? 'tv' : 'movie') + `/${el.id}`} key={el.id} className={'movie col-12 col-md-4 col-xl-3'}>
                    <Movie key={el.id}
                      id={el.id}
                      image={el.poster_path}
                      title={el.original_title}
                      description={el.overview}
                      vote={el.vote_average}
                    />
                  </Link>
                )
              }
              else {
                return (
                  <Link to={'/detail/' + (getActive === 'top' ? 'movie' : getActive === 'tv' ? 'tv' : 'movie') + `/${el.id}`} key={el.id} className={'movie col-12 col-md-4 col-xl-3'}>
                    <Movie key={el.id}
                      id={el.id}
                      image={el.poster_path}
                      title={el.original_name}
                      description={el.overview}
                      vote={el.vote_average}
                    />
                  </Link>

                )

              }

            })) : null

          }
        </BoxMovie>
      </div>
    </div>
  );
}

export default HomeMovies;
