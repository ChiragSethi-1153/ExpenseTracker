
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserSignup.css";
import {Button} from '@mui/material'
import validator from "validator";
import {useDispatch} from 'react-redux'
import { signup } from "../../Redux/Slice/userSlice";


const UserSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({name: '', email: '', password: ''})
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
 
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is Strong Password");
    } else {
      setErrorMessage("Is Not Strong Password");
    }
  };

  function handleEmail(event) {
    let inValue = event.target.value;
    setInputValue({...inputValue, email: inValue})

    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(inValue)) {
      setEmailErrorMsg("invalid email.");
    } else {
      setEmailErrorMsg("");
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(inputValue));
    navigate('/login')
    }


  return (
    <div className="signup">
      <div className="signup-left">
        <div className="signup-form-box">
          <div className="join-div">
            <p className="join">
              Sign Up
              <span className="joinus-span">!</span>
            </p>
            <p>
              Do you have an account?{" "}
              <span>
                <button
                  className="login-btn"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
           

            <br />
            <input
              type="text"
              name="name"
              value={inputValue.name}
              placeholder="Enter Your Name"
              onChange={(e) => setInputValue({...inputValue, name: e.target.value})}
              required
            />
            <br />
            <br />
            <input
              type="email"
              name="email"
              value={inputValue.email}
              placeholder="Enter Your Email"
              onChange={(e) => {
                handleEmail(e)
                
              }}
              required
            />
            <p style={{ color: "red" }}> {emailErrorMsg}</p>
            <br />
            <input
              type="text"
              name="password"
              value={inputValue.password}
              placeholder="Set Your Password"
              onChange={(e) => {
                setInputValue({...inputValue, password: e.target.value})
                validate(e.target.value);
              }}
              required
            />

            <p>
              {errorMessage === "" ? null : (
                <span
                  style={{
                    fontWeight: "normal",
                    color: "red",
                  }}
                >
                  {errorMessage}
                </span>
              )}
            </p>

            <br />
            <br />
        <Button variant="contained" className="signup-btn" type="submit">
           Sign Up
        </Button> 
          </form>
          <br />
        </div>
      </div>
     
    </div>
  );
};

export default UserSignup;
