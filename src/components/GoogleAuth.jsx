import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { GoogleLogin } from "react-google-login";

function GoogleAuth() {

    let dispatch = useDispatch();
    let history = useHistory();

    let googleSuccess = async (res) => {
        console.log(res)
        const userData = await res?.profileObj;
        const token = await res?.tokenId;
        console.log(userData)
    
        try {
          dispatch({type : 'AUTH', data : {userData, token}})
          history.push('/')
    
        } catch (error) {
          console.log(error)
        }
      }
    
      let googleFaliure = () => {
        console.log("Google Sign in Failed")
      }


    return (
        <>
                              <GoogleLogin
                    clientId="1036702224413-kia1kfljdv8i9bnh5e8ohug2s2c9vnq4.apps.googleusercontent.com"
                    render={(renderprops) => (
                      <button
                        className="login-with-google-btn" onClick={renderprops.onClick} disabled={renderprops.disabled}>Sign Up with Google</button>
                    )}
                     onSuccess = {googleSuccess}
                     onFailure = {googleFaliure}  
                     cookiePolicy = 'single_host_origin' 
                  />
        </>
    )
}

export default GoogleAuth
