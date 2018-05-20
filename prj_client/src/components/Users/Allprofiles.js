import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import MapContainer from "./MapContainer";
import axios from "axios";
// import jwtDecoder from "jwt-decode";
import RaisedButton from "material-ui/RaisedButton";

import TextField from "material-ui/TextField";
import Geocode from "react-geocode";
// import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'
// import PlacesAutocomplete from 'react-places-autocomplete'

import PlacesAutocomplete, { geocodeByAddress,geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


// npm install --save react-places-autocomplete


import './Allprofile.css';

class Allprofiles extends PureComponent {

  constructor(props) {
  super(props);
  this.state = {
    allusers: null,
    height: 20,
    width:20,
    locsearch:'',
    lat: -33.8688197,
    lng:151.20929550000005
      }
    this._handleChangeloc = this._handleChangeloc.bind(this);
    this._handleClickloc = this._handleClickloc.bind(this);
    this._handleClick = this._handleClick.bind(this);
  };


  // have to put await otherwise it was showing blank page
  componentDidMount = async () => {
    await this.fetchUsers();
  };

  _handleClick = u => {
  const user = {
    pathname: `/userdetails/${u.id}`,
    state: u
  };
  this.props.history.push(user);
};
  _handleClick2 = u => {
  const user = {
    pathname: `/chat`,
    state: u
  };
  this.props.history.push(user);
};

// _handleClick2 = () => {
//   const location = {
//     pathname: `/chat`,
//     state: this.state.locsearch
//   };
//
//   this.props.history.push(location);
// };


  // for the search functionality
  _handleChangeloc(event) {


      this.setState({
        locsearch: event.target.value
      });


    }
  _handleClickloc() {
    // setting up the setState


    Geocode.fromAddress(this.state.locsearch).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        this.setState({
          lat: lat,
          lng:lng
        });
      },
      error => {
        console.error(error);
      }
    );
    // code ends

   this.fetchUsers()
  }
// serch functonality ends
  fetchUsers = () => {
    let url1= 'http://localhost:3333/users.json';
    if(this.state.locsearch) {
      // debugger;
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
    console.log('result data is ', res.data);
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

/// new code



/// code endss


  render() {
    if(!this.state.allusers){
      return null;
    }
    // const allusers = this.state.allusers;
    // console.log("All users",allusers);
    return (
      <div className="AllprofilesTop">




        <div className="Allprofilespage">

          <div className = "Allprofiles">
          <div className="searchInfo">
          <TextField
             id="userloc-field"
             className="searchText"
             type="location"
             hintText="Sydney"
             onChange={this._handleChangeloc}
             floatingLabelText="Location"/>

             <RaisedButton
              className="searchLoc"
               label="Search"
               primary={true}
               onClick={this._handleClickloc}
             />
          </div>
          <br />

          { this.state.allusers.map( user =>

            <div key={user.id}>
            <img src={ user.image } alt={ user.name } height={ this.state.height }  width={ this.state.width }/>

            <p><strong>{user.name}</strong></p>

              <p className="block-with-text" ><strong>About:</strong> {user.description}</p>

            <p><strong>Key skills:</strong> {user.keyskills}</p>

            <br />


            {<a onClick = {() => this._handleClick(user)} value ={user} href={`/userdetails/${user.id}`} ><RaisedButton primary={true} className="work" label ="My Work"></RaisedButton></a>}
            {<a onClick = {() => this._handleClick2(user)} value ={user} href={`/chat`} ><RaisedButton primary={true} className="chat" label="Chat"></RaisedButton></a>}
              <br />
                <br />
            <hr />
            <br />

            </div>
          )}
          </div>
          <div className = "Allmaps">
            <div>



               <MapContainer locsearch ={this.state.locsearch}
               lat= {this.state.lat}
               lng={this.state.lng}/>
            </div>

          </div>
        </div>

     <Footer />
      </div>
    );
  }
}

// new modeule

// class LocationSearchInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { address: '' }
//   }
//
//   handleChange = (address) => {
//     this.setState({ address })
//   }
//
//   handleSelect = (address) => {
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(latLng => console.log('Success', latLng))
//       .catch(error => console.error('Error', error))
//   }
//
//   render() {
//     return (
//       <PlacesAutocomplete
//         value={this.state.address}
//         onChange={this.handleChange}
//         onSelect={this.handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps }) => (
//           <div>
//             <TextField
//               {...getInputProps({
//                 placeholder: 'Search Places ...',
//                 className: 'location-search-input'
//               })}
//             />
//             <RaisedButton
//               label="Search"
//               primary={true}
//               onClick={this._handleClickloc}
//             />
//
//             <div className="autocomplete-dropdown-container">
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                             ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                             : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                 return (
//                   <div {...getSuggestionItemProps(suggestion, { className, style })}>
//                     <span>{suggestion.description}</span>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     );
//   }
// }

// new module ends

export default Allprofiles;


// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyC5aeRg0RBV99YfltTMDZPvO8h9lg_E8p0'
// })(Allprofiles)
