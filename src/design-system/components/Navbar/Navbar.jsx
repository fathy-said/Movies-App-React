import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from "react-router-dom"
import { HiArrowNarrowRight } from "react-icons/hi";

let Header = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to={"/"}>
            <Navbar.Brand href="" >
              <svg width="414" height="414" viewBox="0 0 414 414" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M96.1563 163.286L276.948 49.8546C311.167 28.3874 355.562 53.0693 355.562 93.5689V320.431C355.562 360.927 311.167 385.613 276.948 364.146L96.1563 250.715C63.972 230.518 63.972 183.482 96.1563 163.286Z" fill="#1EA5FC" />
                <path d="M317.843 163.286L137.052 49.8546C102.833 28.3874 58.4379 53.0693 58.4379 93.5689V320.431C58.4379 360.927 102.833 385.613 137.052 364.146L317.843 250.715C350.028 230.518 350.028 183.482 317.843 163.286Z" fill="#7B6EF6" />
              </svg>


            </Navbar.Brand>

          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <div className="box-link">
              <NavLink to={"/movies"}>
                movies
              </NavLink>
              <NavLink to={"/tvShows"}>
                TV Shows
              </NavLink>
              <NavLink to={"/suggestMe"}>
                suggest Me <span>
                  <HiArrowNarrowRight />
                </span>
              </NavLink>

            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
};

export default Header;
