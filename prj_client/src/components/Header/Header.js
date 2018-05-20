import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import Signup from "../Users/Signup";
// import Login from "../Users/Login";
// import Homepage from "../Homepage/Homepage";
// import Editprofile from "../Users/Profile";
// import Allprofile from "../Users/Allprofiles";
// import Jobs from "../Jobs/Jobs";
import imgIcon from '../images/Logo.png'
import './Header.css';
// <Link to = '/Login' className="headerLink">LogIn</Link>

class Home extends Component {
  _signOut() {
    // debugger;
    localStorage.removeItem("jwtToken");
  }

  render() {
    // debugger;
    // debugger;
    console.log("Token is Header",window.localStorage.jwtToken);
    // debugger;
    return (
      <header>
        <nav className="navbar">


          <img src = {imgIcon} alt= "Logo" className="pickMe"/>

          <Link to = "/" className ="navBarTop">Home</Link>
          <Link to = '/allprofiles' className="navBarTop">Profiles</Link>

          { window.localStorage.jwtToken ? (
            <div className="LoginDet">
              <Link to = "/profile">My Profile</Link>
              <Link to="/">
                <a className = "signOutBtn" onClick={this._signOut}>Sign out</a>
              </Link>
            </div>
              ):(
              <div className="LoginDet">
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
              </div>
            )}

        </nav>
      </header>
    );

  }

}

export default Home;
