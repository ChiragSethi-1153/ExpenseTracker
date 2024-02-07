import React, { useState } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  Box,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Slice/loginSlice";

const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({email: '', password: ''})


  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(inputValue)
    const a = await dispatch(login(inputValue))  
    console.log(a)
    if(a.payload.status === 200){
      localStorage.setItem('userId', JSON.stringify( a.payload.data.response.user._id))
      navigate('/')
    }
    else{
      alert('Invalid Email / Password')
    }

  }
  

  return (
    <div className="login">
      <div className="Login-form-box">
        <div className="login-text-div">
          <p className="login-text">Login</p>
          <p>
            Don't have an account?
            <span className="signup-span">
              <button
                className="signup-btn"
                onClick={() => navigate("/signup")}
              >
                Sign Up!
              </button>
            </span>
          </p>
        </div>

        <form onSubmit={handleLogin} className="login-form">

          
          <label htmlFor="email"></label>
          <br />
          <input
            type="email"
            name="email"
            value={inputValue.email}
            placeholder="Enter Your Email"
            onChange={(e) => setInputValue({...inputValue, email: e.target.value})}
            required
          />
          <br />
          <label htmlFor="password"></label>
          <br />
          <input
            type="text"
            name="password"
            value={inputValue.password}
            placeholder="Enter Your Password"
            onChange={(e) => setInputValue({...inputValue, password: e.target.value})}
            required
          />
          <br />
          <br />
          <Button variant="contained" type="submit" className="login-btn">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
