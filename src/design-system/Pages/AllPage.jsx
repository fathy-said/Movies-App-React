import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Detail, Movies, TvShows } from "./"
import { Header, FooterOverlay } from '../components';
const AllPage = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tvShows' element={<TvShows />} />
          <Route path='/detail/:type/:id' element={<Detail />} />
        </Routes>

        <FooterOverlay />
      </BrowserRouter>
    </>
  );
}

export default AllPage;
