import React, { useState } from "react";
import loginImage from "./images/loginImage.png";
import  GoogleAuth from './GoogleAuth'
import { Link } from "react-router-dom";
import "./style/login.css";

function Login() {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });


  let handelLogin = (e) => {
    e.preventDefault();
  };

  let handelChange = (e) => {
    let { name, value } = e.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  
  return (
    <div>
      <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
        <h1>
          <a href="#" rel="dofollow">
            Log In
          </a>
        </h1>
      </div>
      <div className="log">
        <div class="login-outer">
          <div class="login-main">
            <div class="formbg-inner padding-horizontal--48">
              <span class="padding-bottom--15">Log in to your account</span>
              <form id="stripe-login" onSubmit={handelLogin}>
                <div class="field padding-bottom--24">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={loginCredentials.email}
                    onChange={handelChange}
                  />
                </div>
                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="password">Password</label>
                    <div class="reset-pass">
                      <a href="#">Forgot your password?</a>
                    </div>
                  </div>
                  <input
                    type="password"
                    value={loginCredentials.password}
                    name="password"
                    onChange={handelChange}
                  />
                </div>
                <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label for="checkbox">
                    <input type="checkbox" name="checkbox" /> Stay signed in for
                    a week
                  </label>
                </div>
                <div class="field padding-bottom--24">
                  <input type="submit" name="submit" value="Log In" />
                </div>
                <div class="field">
                  <GoogleAuth />
                </div>
              </form>
            </div>
          </div>
          <div class="footer-link">
            <span>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </span>
          </div>
        </div>
        <img src={loginImage} alt="login" className="loginImage" />
      </div>
    </div>
  );
}

export default Login;
