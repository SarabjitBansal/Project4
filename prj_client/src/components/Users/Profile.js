import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import jwtDecoder from "jwt-decode";
import './Editprofile.css';

class Profile extends Component {
  constructor(props) {
  super(props);
  this.state = {
    user: null
  };
}
componentDidMount = async () => {
  await this.fetchUser();
};


fetchUser = () => {
    // Fat arrow functions do not break the connection to this

    const user = jwtDecoder(this.props.token);

    axios({
      url: `http://localhost:3333/users/${user.sub}.json`,
      method: "get",
      headers: {
        authorization: `Bearer {this.props.token}`
      }
    })
      .then(res => this.setState({ user: res.data }))
  };

  render() {
    if (!this.state.user) {
    return null;
  }
    return (
      <div className="Profile">
        <Header />
        My profile page
          <Link to="/Editprofile">Edit Profile</Link>

        <Footer />
      </div>
    );
  }
}
export default Profile;
