import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MapContainer from "./MapContainer";
import axios from "axios";
import jwtDecoder from "jwt-decode";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";


import './Allprofile.css';


class Allprofiles extends PureComponent {

  constructor(props) {
  super(props);
  this.state = {
    allusers: null,
    height: 20,
    width:20,
    locsearch:''

      }
    this._handleClick = this._handleClick.bind(this);
    this._handleChangeloc = this._handleChangeloc.bind(this);
    this._handleClickloc = this._handleClickloc.bind(this);
  };

  _handleClick(e){
    console.log('clicked');
  }
  // have to put await otherwise it was showing blank page
  componentDidMount = async () => {
    await this.fetchUsers();
  };
  // for the search functionality
  _handleChangeloc(event) {
      this.setState({
        locsearch: event.target.value
      });
    }
  _handleClickloc() {
   this.fetchUsers()
  }
// serch functonality ends
  fetchUsers = () => {
    let url1= 'http://localhost:3333/users.json';
    if(this.state.locsearch) {
      debugger;
        let k = this.state.locsearch
       url1= `http://localhost:3333/users/search/${k}.json`;
    }
    else {
       url1= 'http://localhost:3333/users.json';
      }


    axios({
      url: url1,
      method: "get",
      headers: {
        authorization: `Bearer ${this.props.token}`
      }
    }).then(res => {this.setState({ allusers: res.data })
    // if(this.state.locsearch) {
    //   let arr = res.data;
    //   let newresult=[];
    //   for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].location === this.state.locsearch ){
    //         newresult.push(arr[i]);
    //     }
    //   }
    //   this.setState( { allusers: newresult } )
    // }
  }


  ).then((res)=> {
      // console.log('im new res');
      // console.log('Im am res ',res);
      // console.log('res data new',res.data);
      // for seacrh functionality



  /// serch functionality ends
    }
    );


  };

  render() {
    if(!this.state.allusers){
      return null;
    }
    const allusers = this.state.allusers;
    // console.log("All users",allusers);
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
            <br />
            <RaisedButton
              label="Details"
              primary={true}
              onClick={this._handleClick}
            />
            <hr />
            </div>
          )}
          </div>
          <div className = "Allmaps">
            <div>
            <TextField
               id="userloc-field"
               type="location"
               hintText="location"
               onChange={this._handleChangeloc}
               floatingLabelText="Location"/>

               <RaisedButton
                 label="Search"
                 primary={true}
                 onClick={this._handleClickloc}
               />
               <MapContainer locsearch ={this.state.locsearch}/>
            </div>

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
