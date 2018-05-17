import React from 'react';
import Signup from "./components/Users/Signup";
import Login from "./components/Users/Login";
import Editprofile from "./components/Users/Editprofile";
import Allprofiles from "./components/Users/Allprofiles";
import Profile from "./components/Users/Profile";
import Home from './components/Home';
import Homepage from './components/Homepage/Homepage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// import Search from './components/newuser';

const muiTheme = getMuiTheme({
  datePicker: {
    selectColor: "#5C67E1"
  },
  flatButton: { primaryTextColor: "#5C67E1" }
});


const token = localStorage.getItem('jwtToken');
console.log("Token",token);

const Routes =()=> (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
  <Router>
  <div className = "container">
    <div className="routes">

      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login}/>
      <Route exact path="/signup" component={ Signup }/>
      <Route exact path="/homepage" component={ Homepage }/>


      <Route exact path="/Profile" render={props => (
      token ? (

        <Profile {...props} token={token}/>

      ) : (
        <Redirect to="/login" />
      )
    )} />
    <Route exact path="/Editprofile" render={props => (
      token ? (
        <Editprofile {...props} token={token}/>
      ) : (
        <Redirect to="/login" />
      )
    )} />

    <Route exact path="/allprofiles" component={ Allprofiles }/>
    </div>
  </div>

  </Router>
  </MuiThemeProvider>
);

export default Routes;
