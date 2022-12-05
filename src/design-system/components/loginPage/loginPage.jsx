import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logInTest } from '../../RTX/Reducers/LogChangeReducer';
import "./loginPage.css"
const LoginPage = () => {
  const [name, setName] = useState(null);
  let dispatch = useDispatch()

  return (
    <>
      <div className="login-box">
        <div className="container">
          <form className="" disabled onSubmit={(e) => {
            e.preventDefault()
          }}>
            <div>
              <h6>Name</h6>
              <input type="text" placeholder='User Name' onChange={(e) => {
                setName(e.target.value)
                if (e.target.value.length <= 0) {
                  setName(null)
                }
              }} />

            </div>
            <div>
              <h6>Email</h6>
              <input type="email" name="" id="" placeholder='Email' />

            </div>
            <div className={name != null ? 'box-submit' : 'box-submit disabled'} >
              {
                name != null ? (
                  <Link to={"/"}>
                    <input type="submit" value="submit" onClick={() => {
                      dispatch(logInTest(name))

                    }} />
                  </Link>
                )
                  : (<input type="submit" value="submit" />)
              }
            </div>
          </form>


        </div>
      </div>
    </>
  );
}

export default LoginPage;
