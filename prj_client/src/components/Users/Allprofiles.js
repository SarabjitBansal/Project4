import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import jwtDecoder from "jwt-decode";
import './Allprofile.css';
class Allprofiles extends PureComponent {
debugger;
  constructor(props) {
  super(props);
  this.state = {
    allusers: null,
    height: 20,
    width:20 }
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
    console.log("All users",allusers);
    return (
      <div className="AllprofilesTop">
        <Header />
        All Profiles

        <div className="Allprofilespage">
          <div className = "Allprofiles">
          { this.state.allusers.map( user =>
            <div key={user.id}>

            <img src={ user.image } alt={ user.name } height={ this.state.height }  width={ this.state.width }/>

            <p>{user.name}</p>
            <p>{user.description}</p>
            <p>{user.keyskills}</p>
            <hr />
            </div>
          )}
          </div>
          <div className = "Allmaps">
            
          </div>
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
