import React, { useEffect, useRef, useState } from 'react';
import { SearchBox } from "../"
import { BoxMovie, Movie, PaginationBox, PaginationSearch } from "../index"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTvThunk } from "../../RTX/Thunk/getTvThunk"
import { SearchTvThunk } from "../../RTX/Thunk/SearchTvThunk"
import './TvPage.css'
const TvPage = () => {
  let { dataTv, totalPages, loadingTv } = useSelector((state) => state.tvSlice)
  const [getWord, setWord] = useState(null);
  let dispatch = useDispatch()
  const shouldData = useRef(true)
  useEffect(() => {
    if (shouldData.current) {
      dispatch(getTvThunk({ page: 1 }))
      shouldData.current = false
    }
  }, []);
  return (
    <>
      <div className="tv-page">
        <div className="hero-movies">
          <div className="container">
            <h5>MaileHereko</h5>
            <h1>Tv Shows</h1>
            <div className='search-box'>
              <form className="form">
                <label htmlFor="search">
                  <input
                    className="input"
                    type="text"
                    required=""
                    placeholder={`Search`}
                    id="search"
                    onChange={(e) => {
                      dispatch(SearchTvThunk({ type: 'tv', query: e.target.value }))

                      setWord(e.target.value)
                      if (e.target.value.length <= 0) {
                        dispatch(getTvThunk({ page: 1 }))
                        setWord(null)

                      }
                    }}
                  />
                  <div className="fancy-bg" />
                  <div className="search">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
                    >
                      <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                      </g>
                    </svg>
                  </div>

                </label>
              </form>

            </div>
            <h6>{dataTv.length} items</h6>

          </div>
        </div>
        <div className="box container">
          {
            loadingTv ? <h2>Loading...</h2> : (<BoxMovie>
              {
                dataTv.length ? dataTv.map((el) => {
                  return (
                    <Link key={el.id + 20000} to={'/detail/' + 'tv' + `/${el.id}`} className={'movie col-12 col-md-4 col-xl-3'} >
                      <Movie
                        id={el.id}
                        image={el.poster_path}
                        title={el.name}
                        description={el.overview}
                        vote={el.vote_average}
                      />
                    </Link>
                  )
                }) : null
              }
            </BoxMovie>)

          }

        </div>
        {
          getWord !== null ? (<PaginationSearch totalPages={totalPages} dispatchType={SearchTvThunk} getWord={getWord} />) : (<PaginationBox totalPages={totalPages} dispatchType={getTvThunk} />)

        }


      </div>
    </>
  );
}

export default TvPage;
