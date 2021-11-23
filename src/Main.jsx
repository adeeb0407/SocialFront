import React,{useEffect, useState} from 'react'
import DisplayPosts from './components/DisplayPosts'
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar'
import './components/style/createPost.css'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login';
import SignUpMain from './components/SignUp'
import Profile from './components/Profile';

function Main() {


    return (
        <>       <div>
        <div className="login-root">
<div className="box-root flex-flex flex-direction--column" style={{minHeight: '100vh',flexGrow : '1'}}>
  <div className="loginbackground box-background--white padding-top--64">
    <div className="loginbackground-gridContainer">
      <div className="box-root flex-flex" style={{gridArea: 'top / start / 8 / end'}}>
        <div className="box-root" style={{backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1}}>
        </div>
      </div>
      <div className="box-root flex-flex" style={{gridArea: ' 4 / 2 / auto / 5'}}>
        <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{flexGrow: 1}}></div>
      </div>
      <div className="box-root flex-flex" style={{gridArea: '6 / start / auto / 2'}}>
        <div className="box-root box-background--blue800" style={{flexGrow: 1}}></div>
      </div>
      <div className="box-root flex-flex" style={{gridArea: '7 / start / auto / 4'}}>
        <div className="box-root box-background--blue animationLeftRight" style={{flexGrow: 1}}></div>
      </div>
      <div className="box-root flex-flex" style={{gridArea: "8 / 4 / auto / 6"}}>
        <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{flexGrow: 1}}></div>
      </div>
      <div className="box-root flex-flex" style={{grindArea: "2 / 15 / auto / end"}}>
        <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{flexGrow: 1}}></div>
      </div>
      <div className="box-root flex-flex" style={{gridArea: "3 / 14 / auto / end"}}>
        <div className="box-root box-background--blue animationRightLeft" style={{flexGrow: 1}}></div>
      </div>
      <div className="box-root flex-flex" style={{gridArea: "4 / 17 / auto / 20"}}>
        <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{flexGrow: 1}}></div>
      </div>
      <div className="box-root flex-flex" style={{gridArea: "5 / 14 / auto / 17"}}>
        <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{flexGrow: 1}}></div>
      </div>
    </div>
  </div>
  <div className="box-root flex-flex flex-direction--column" style={{flexGrow: 1,zIndex: 9}}>
        <Navbar />
        <Switch>
        <Route exact path = '/'>
            <DisplayPosts/>
            </Route>
        <Route exact path = '/profile'>
            <Profile/>
            </Route>
            <Route exact path = '/createpost'>
              <CreatePost />
              </Route>
            <Route exact path = '/login'>
              <Login />
              </Route>
            <Route exact path = '/signup'>
              <SignUpMain />
              </Route>
              </Switch>
              <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
              <span><a href="#">&copy; Adeeb Shah</a></span>
              <span><a href="https://adeeb0407.github.io/portfolio.github.io/#contact" target = '_blank'>Contact</a></span>
            </div>
  </div>
</div>
</div>
    </div>
        </>
    )
}

export default Main
