import React, {useState} from 'react'
import loginImage from './images/loginImage.png'
import {Link} from 'react-router-dom'
import  GoogleAuth from './GoogleAuth'

function SignUpMain() {

  const [signUpCredentials, setsignUpCredentials] = useState({
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    confirmPassword : ''
  })

  let handelSignup = (e) => {
    e.preventDefault();
  }

  let handelChange = (e) => {
    let {name , value} = e.target
    setsignUpCredentials({...signUpCredentials, [name]:value})
  }

    return (
        <div>
         <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1><a href="#">Sign Up</a></h1>
        </div>
        <div className = 'log'>
             <div class="login-outer">
          <div class="login-main">
            <div class="formbg-inner padding-horizontal--48">
              <span class="padding-bottom--15">Sign Up to a New Account</span>
              <form id="stripe-login" onSubmit = {handelSignup}>
                <div class="field padding-bottom--24">
                  <label for="firstName">First Name</label>
                  <input type="firstName" name="firstName" value = {signUpCredentials.firstName} onChange = {handelChange}/>
                </div>
                <div class="field padding-bottom--24">
                  <label for="lastName">Last Name</label>
                  <input type="lastName" name="lastName" value = {signUpCredentials.lastName} onChange = {handelChange}/>
                </div>
                <div class="field padding-bottom--24">
                  <label for="email">Email</label>
                  <input type="email" name="email" value = {signUpCredentials.email} onChange = {handelChange}/>
                </div>
                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="password">Password</label>
                  </div>
                  <input type="password" name="password" value = {signUpCredentials.password} onChange = {handelChange}/>
                </div>
                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="confirmPassword">Confirm Password</label>
                  </div>
                  <input type="password" name="confirmPassword" value = {signUpCredentials.confirmPassword} onChange = {handelChange} />
                </div>
                <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label for="checkbox">
                    <input type="checkbox" name="checkbox" /> Stay signed in for a week
                  </label>
                </div>
                <div class="field padding-bottom--24">
                  <input type="submit" name="submit" value="Sign Up" />
                </div>
                <div class="field">
                  <GoogleAuth />
                </div>
              </form>
            </div>
            </div>
          <div class="footer-link">
            <span>Already have an account? <Link to ='/login'>Log In</Link></span>
          </div>
          </div>
          <img src = {loginImage} alt = 'login' className = 'loginImage'/>
        </div>
        </div>
    )
}

export default SignUpMain
