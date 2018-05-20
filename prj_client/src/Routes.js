import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Signup from "./components/Users/Signup";
import Login from "./components/Users/Login";
import Editprofile from "./components/Users/Editprofile";
import Allprofiles from "./components/Users/Allprofiles";
import Profile from "./components/Users/Profile";
import Home from './components/Homepage/Home';
import Nav from "./components/Header/Header";
import Userdetails from "./components/Users/Userdetails";
import App from "./components/App";

// import Search from './components/newuser';

const muiTheme = getMuiTheme({
  datePicker: {
    selectColor: "#5C67E1"
  },
  raisedButton: { backgroundColor:"#ccc",primaryTextColor: "#fff" },
  textField:{primaryTextColor: "#fff" }
});


const token = localStorage.getItem('jwtToken');

console.log("Token is at Routes",token);
debugger;
const Routes =()=> (

  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>

  <Router>
  <React.Fragment>
  <Nav />
  <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/allprofiles" component={ Allprofiles }/>



      <Route exact path="/profile" render={props => (
      token ? (<Profile {...props} token={token}/>

      ) : (
        <Redirect to="/login" />
      )
    )} />

    <Route exact path="/editprofile" render={props => (
      token ? (
        <Editprofile {...props} token={token}/>
      ) : (
        <Redirect to="/login" />
      )
    )} />
    <Route exact path="/login" component={ Login}/>
    <Route exact path="/signup" component={ Signup }/>
    <Route exact path="/userdetails/:id" component={ Userdetails }/>

    <Route exact path="/chat" render={props => (
      token ? (
        <App {...props} token={token}/>
      ) : (
        <Redirect to="/login" />
      )
    )} />


  </Switch>
</React.Fragment>
</Router>

  </MuiThemeProvider>
);

export default Routes;
