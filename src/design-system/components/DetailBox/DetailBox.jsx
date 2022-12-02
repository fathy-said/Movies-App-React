import React, { useEffect, useState } from 'react';
import "./DetailBox.css"
import { AiOutlineStar } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DetailThunk } from '../../RTX/Thunk/DetailThunk';
const DetailBox = () => {
  let dispatch = useDispatch()
  let { detailData, loading } = useSelector((state) => state.DetailReducer)
  const [detail, setDetail] = useState('');
  let param = useParams()
  useEffect(() => {
    dispatch(DetailThunk({ id: param.id, type: param.type }))
  }, [param.type]);
  useEffect(() => {
    setDetail(detailData)
  }, [detailData]);

  return (

    <>
      {
        loading ? <h2 className='loading'>loading...</h2> : (detail ? (<div className='detail-box'>
          <div className="container">
            <div className="img-banner">
              <div className="box"><h1>name :{detail.original_name ? detail.original_name : detail.original_title}</h1></div>
              <img src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`} alt="" />
            </div>
            <div className="box-content flex-column flex-lg-row">
              <div className="box-img">
                <img src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} alt="" />

              </div>
              <div className="box-info">
                <div className="box">
                  <h3>{detail.tagline ? detail.tagline : null}</h3>
                  <p>{detail.overview}</p>
                  <span className='star'>
                    {<AiOutlineStar />}8.3
                  </span>
                  <ul>
                    <li>
                      <h5>Type</h5>
                      <h6>{param.type}</h6>
                    </li>
                    <li>
                      <h5>budget</h5>
                      <h6>{detail.budget ? detail.budget : null}$</h6>
                    </li>
                    <li>
                      <h5>original language</h5>
                      <h6>{detail.original_language}</h6>
                    </li>
                    <li>
                      <h5>Genres</h5>
                      <h6>Adventure,  Science Fiction, Action</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href={detail.homepage ? detail.homepage : null}>
              <button>assistir</button></a>
          </div>
        </div>) : null)

      }

    </>
  );
}

export default DetailBox;
