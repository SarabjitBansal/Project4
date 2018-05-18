import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import Signup from "../Users/Signup";
// import Login from "../Users/Login";
// import Homepage from "../Homepage/Homepage";
// import Profile from "../Users/Profile";
// import Allprofile from "../Users/Allprofiles";
// import Jobs from "../Jobs/Jobs";
import imgIcon from '../images/pickme.png'
import './Header.css';
// <Link to = '/Login' className="headerLink">LogIn</Link>

class Home extends Component {
  _signOut() {
    // debugger;
    localStorage.removeItem("jwtToken");
  }

  render() {
    // debugger;
    console.log("Token is here",window.localStorage.jwtToken);
    return (
      <header>
        <nav className="Header">
        <img src = {imgIcon} alt= "Logo" className="pickMe"/>

          <Link to = "/homepage" className ="navTop">Homepage</Link>
          <Link to = '/allprofiles' className="navTop">Profiles</Link>

          { window.localStorage.jwtToken ? (
            <div>
              <Link to = '/editprofile' className="navTop">My Profile</Link>
              <Link to="/">
                <button className= "signOutBtn" onClick={this._signOut}>Sign out</button>
              </Link>
            </div>
              ):(
                <div>
                  <Link to="/signup" className= "navTop2">Sign Up</Link>
                  <Link to="/login" className= "navTop2">Login</Link>
                </div>
            )}

        </nav>
      </header>
    );
  }
}

export default Home;
