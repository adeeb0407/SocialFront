import React,{useState} from 'react'
import './style/profile.css';

function Profile() {

    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('profile')))
    console.log(userData)
    return (
        <div>
           {userData !== null ? <aside class="profile-card">
  <header>
    <a target="_blank" href="#">
      <img src={userData?.userData.imageUrl} class="hoverZoomLink" />
    </a>

    <h1>
            {userData?.userData.givenName}
          </h1>

    <h2>
            {userData?.userData.email}
          </h2>

  </header>

  <div class="profile-bio">

    <p>
      It takes monumental improvement for us to change how we live our lives. Design is the way we access that improvement.
    </p>

  </div>
</aside> : <h1 style = {{textAlign : 'center', color : 'red'}}>You must Login First</h1>}
        </div>
    )
}

export default Profile
