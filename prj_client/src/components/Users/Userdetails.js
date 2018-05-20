import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
// import jwtDecoder from "jwt-decode";

// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import 'react-process-string';
import 'font-awesome/css/font-awesome.min.css';
import './Allprofile.css';
import Github from '../../utils';

class Userdetails extends Component {

  constructor(props) {
  super(props);
  this.state = {
    uid: this.props.location.state.id,
    uimage : this.props.location.state.image,
    uname : this.props.location.state.name,
    udescription : this.props.location.state.description,
    ukeyskills: this.props.location.state.keyskills,
    uemail : this.props.location.state.email,
    ugithubu : this.props.location.state.githubu,
    ulinkedinu : this.props.location.state.linkedinu,
    uinstau : this.props.location.state.instau,
    utwitteru : this.props.location.state.twitteru,
    uresumeu: this.props.location.state.resumeu,
    height: 50,
    width:50,
    user:null,
    repos:null
      }
    console.log("Props in user details",this.props);
  };

  componentDidMount() {
    debugger;
    const username = 'SarabjitBansal' //this.props.location.state.name; // Check React dev tools to see where this comes from.
    let newnm = this.props.location.state.githubu
    // let nwus =  new RegExp('/\github.com\/(.*)/');
    // console.log(nwus);
    // let newuser = nwus.match( newnm );
    // console.log(newuser);
    // const username = this.props.location.state.githubu;
    Github.getUserInfo(username).then( (info) => {
      this.setState({user: info.data});
    });
    Github.getUserRepos(username).then( (info) => {
      this.setState({repos: info.data});
    })
  }

  render() {
    if (this.state.uid === null) {
      return(<div className="info">Loading...</div>);
    }

    // Destructure
    const { login, followers, following, public_repos, public_gists } = this.state.uname;


    return (
      <div className="Profiles">
      <div className="userDetails">
        <div key={this.state.uid}>
          <img src={ this.state.uimage } alt={ this.state.uname } height={ this.state.height }  width={ this.state.width }/>
          <p>{this.state.name}</p>
          <p><strong>About: </strong> {this.state.udescription}</p>
          <p><strong>Keyskills: </strong>{this.state.ukeyskills}</p>
          <p><strong>Location: </strong>{this.props.location.state.location}</p>
          <br />
        </div>
        <div className="socialMedia">
          <div><a  href={ `${this.state.ulinkedinu}` }  target="_blank" className="fa fa-linkedin"><p>{this.state.ulinkedinu}</p></a></div>
          <div><a  href={ `${this.state.utwitteru}` }  target="_blank" className="fa fa fa-twitter"><p>{this.state.ulinkedinu}</p></a></div>
          <div><a  href={ `${this.state.uinstau}` }  target="_blank" className="fa fa fa-instagram"><p>{this.state.ulinkedinu}</p></a></div>
          <div><a  href={ `${this.state.ugithubu}` }  target="_blank" className="fa fa fa-github"><p>{this.state.ulinkedinu}</p></a></div>
        </div>
      </div>
      <div className="gitDetails">

      <h2>Github User Details</h2>
      <UserInfo user={this.state.user} />
      <Repositories repos={this.state.repos} />
      </div>




     <Footer />
      </div>
    );
  }
}

///new code

class UserInfo extends Component {
  render() {
    if (this.props.user === null) {
      return(<div className="info">Loading...</div>);
    }

    // Destructure
    const { login, followers, following, public_repos, public_gists } = this.props.user;

    return (
      <div className="info">
        <h3>Stats for {login}</h3>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Repos: {public_repos}</p>
        <p>Gists: {public_gists}</p>
      </div>
    )
  }
};

class Repositories extends Component {
  render() {
    if (this.props.repos === null) {
      return (<div className="repos">Loading...</div>);
    }

    const userRepos = this.props.repos.map( (r) => {
      return (
        <li>
          <a href={r.html_url} target="_blank">
            {r.name}
          </a>
        </li>
      )
    });

    return (
      <div className="repos">
        <h3>User Repositories</h3>
        <ul>
          {userRepos}
        </ul>
      </div>
    )
  }
}


///
export default Userdetails;
