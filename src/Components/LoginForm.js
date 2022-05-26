import React from "react";
import "./List.css";
import y from "../Components/logo.png";
import z from "../Components/side.jpg";
const LoginForm = () => {
  return (
    <div className="split ">

      
        <p id="imgp">
        
          <div id="container">
            <div class="head2">
              <img src={y} alt="logo" id="img1"/>
            </div>
            <h1 class="head">All Your Music........
            anytime,anywhere</h1>
            
            <img src={z} alt="music" id="im2" />
          </div>
        </p>
      
      <p id="divb">
        <div className="LoginDivmain">
          <div id="top">
            <p id="signup">Don't have a MusicApp account yet?</p>
            <button type="submit" id="sbutton">
              SignUp
            </button>
          </div>

          <h1 id="a">Welcome to Music App.</h1>
          <h5 id="b">Log in with your email address.</h5>
          <form method="POST" action="" id="form">
            <input
              type="text"
              name="name"
              placeholder="Email Address"
              id="inp"
            />
            <br />
            <input
              type="password"
              name="pass"
              placeholder="Password"
              id="inp"
            />
            <br />
            <button type="submit" href="#login" id="log">
              Login
            </button>
            <p id="forget">Forgot password?</p>
            <p id="connect">---------------OR CONNECT WITH---------------</p>
            <div id="splitt">
              <p id="mob">Mobile Number</p>
              <p id="face">Facebook</p>
            </div>
          </form>
        </div>
      </p>
    </div>
  );
};

export default LoginForm;
