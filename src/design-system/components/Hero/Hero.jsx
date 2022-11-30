import React, { useEffect, useRef, useState } from 'react';
import "./Hero.css"
import { SearchBox } from "../"
import { useDispatch, useSelector } from 'react-redux';
import { geMoviesThunk } from "../../RTX/Thunk/getMoviesThunk"
import { Link } from 'react-router-dom';

const Hero = () => {
  let { dataMovie } = useSelector((state) => state.moviesSlice)
  let [moviesHero, setMoviesHero] = useState([]);
  let dispatch = useDispatch()

  const shouldData = useRef(true)
  useEffect(() => {
    if (shouldData.current) {
      dispatch(geMoviesThunk)

      shouldData.current = false
    }
  }
    , []);

  let dataIndex = useRef(0)
  useEffect(() => {
    if (dataMovie.length) {
      setMoviesHero([dataMovie[0]])
      setInterval((e) => {
        if (dataIndex.current == dataMovie.length) {
          dataIndex.current = 0
        }
        let res = dataMovie[dataIndex.current]
        dataIndex.current += 1
        setMoviesHero([res])

      }, 5000);
    }
  }
    , [dataMovie]);


  return (
    <>
      {
        moviesHero.length ? (<div className='hero' id={moviesHero[0].id} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${moviesHero[0].poster_path})` }} >
          <div className="container" data-back={""}>
            <div className="info">
              <h1>
                {
                  moviesHero[0].title ? moviesHero[0].title : moviesHero[0].original_title
                }
              </h1>
              <h6>
                {
                  moviesHero[0].overview
                }
              </h6>
              <Link to={'/detail/' + 'movie' + `/${moviesHero[0].id}`} >
                <button>assistir</button>


              </Link>
            </div>
          </div>
        </div>) : (<div className='hero' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500)` }} >
          <div className="container" data-back={""}>
            <div className="info">
              <h1>

              </h1>
              <h6>

              </h6>

              <button>assistir</button>
            </div>
          </div>
        </div>)
      }

    </>
  );
}

export default Hero;
