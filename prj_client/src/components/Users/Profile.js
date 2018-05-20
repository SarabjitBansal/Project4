import React, { Component } from "react";
import axios from "axios";
import jwtDecoder from "jwt-decode";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import RaisedButton from "material-ui/RaisedButton";


class Profile extends Component {
  debugger;
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
      <div className="profile" key={this.state.user.id}>

      <p>{this.state.user.name}</p>
      <p>{this.state.user.description}</p>
      <p>{this.state.user.keyskills}</p>
      <p>{this.state.user.location}</p>
      <br />

      <div className ="socialMedia">
      <div><a  href={ `${this.state.user.linkedinu}` }  target="_blank" className="fa fa-linkedin"><p>{this.state.user.linkedinu}</p></a></div>
      <div><a  href={ `${this.state.user.twitteru}` }  target="_blank" className="fa fa fa-twitter"><p>{this.state.user.linkedinu}</p></a></div>
      <div><a  href={ `${this.state.user.instau}` }  target="_blank" className="fa fa fa-instagram"><p>{this.state.user.linkedinu}</p></a></div>
      <div><a  href={ `${this.state.user.githubu}` }  target="_blank" className="fa fa fa-github"><p>{this.state.user.linkedinu}</p></a></div>
      <div><a  href={ `${this.state.user.resumeu}` }  target="_blank" className="fa fa fa-paperclip"><p>{this.state.user.linkedinu}</p></a></div>
      </div>
      <br />





      <Link to="/editprofile">
      <RaisedButton primary={true}>Edit Profile</RaisedButton>
      </Link>
      <br/><br/>

       <Footer />
      </div>
    );
  }
}

export default Profile;
