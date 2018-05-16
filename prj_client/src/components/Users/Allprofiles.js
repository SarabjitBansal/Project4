import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import jwtDecoder from "jwt-decode";
import './Editprofile.css';
class Allprofiles extends Component {
debugger;
  constructor(props) {
  super(props);
  this.state = {
    allusers: null
  }
  };

  componentDidMount = async () => {
    await this.fetchUsers();
  };

  fetchUsers = () => {

    axios({
      url: `http://localhost:3333/users.json`,
      method: "get",
      headers: {
        authorization: `Bearer ${this.props.token}`
      }
    }).then(res => this.setState({ allusers: res.data }));
  };

  render() {
    if(!this.state.allusers){
      return null;
    }
    const allusers = this.state.allusers;
    return (
      <div className="AllprofilesTop">
        <Header />
        All Profiles
        <div className = "Allprofiles">
        { this.state.allusers.map( user =>
          <div>
          <p key={user.id}>{user.name}</p>
          <p>{user.description}</p>
          <p>{user.keyskills}</p>
          </div>
        )}

        </div>



      <Link to="/">
      Back to Home
      </Link>
     <Footer />
      </div>
    );
  }
}
export default Allprofiles;
