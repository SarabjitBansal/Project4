
import React, { PureComponent } from 'react';
// import { Link } from "react-router-dom";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// import TextField from "material-ui/TextField";
// import RaisedButton from "material-ui/RaisedButton";
import axios from "axios";
import './Allprofile.css';

export class MapContainer extends PureComponent {

  constructor(props) {
      super(props);
      this.state = {
      resultdata1:[],
      isOpen: false
    };
      // let k = props.locsearch;
      // console.log("K is ",k);
      this.fetchuser = this.fetchuser.bind(this);
      this.handleToggleOpen = this.handleToggleOpen.bind(this);
      this.handleToggleClose = this.handleToggleClose.bind(this);
    }

  componentDidMount() {
    this.fetchuser()
  }
  componentWillReceiveProps(){
    this.fetchuser()
  }
  handleToggleOpen = () => {
    console.log('In Open Func');
  	this.setState({
  		isOpen: true
  	});
  }

  handleToggleClose = () => {
  	this.setState({
  		isOpen: false
  	});
  }
  fetchuser() {
    let url1= 'http://localhost:3333/users.json';
    if(this.props.locsearch) {
      // debugger;
        let k = this.props.locsearch
       url1= `http://localhost:3333/users/search/${k}.json`;
    }
    else {
       url1= 'http://localhost:3333/users.json';
      }
    axios
        .get(url1, {
        })
        .then(res => {
          // console.log("RESULT IS ", res);
          this.setState( { resultdata1: res.data } )

          // console.log('RESULT DATA',this.state.resultdata1);

          //// location serach starts
          // console.log("Props",this.props.locsearch);
          // if(this.props.locsearch) {
          //   console.log('Yes there are props');
          //   let arr = res.data;
          //   let newresult=[];
          //   for (let i = 0; i < arr.length; i++) {
          //     if (arr[i].location === this.props.locsearch ){
          //         newresult.push(arr[i]);
          //     }
          //   }
          //   this.setState( { resultdata1: newresult } )
          // }

          // loc serach ends

        })

  }

// new functonality


    render() {
    //   { true && (
    //     <InfoWindow position={{lat: loc.latitude, lng: loc.longitude}} visible={true} onCloseClick={() => this.handleToggleClose()}>
    //       <div>{loc.keyskills}</div>
    //     </InfoWindow>
    //   )
    //
    // }

      const markers = () => {
        return (
          this.state.resultdata1.map( (loc) =>
              <Marker key ={loc.id} position={{ lat: loc.latitude , lng: loc.longitude }}
                // label={loc.keyskills}
                onClick={() => this.handleToggleOpen()}
               >



             </Marker>
          )
        )
      }

      return (

        <Map google={this.props.google}
        center={{
             lat:this.props.lat,
             lng: this.props.lng
         }}
        className={'map'}
         onReady={this.fetchuser}
         style={{width: '100%', height: '80vh', position: 'fixed'}}
         >

          {markers()}


        </Map>

      );
    }
  }


  export default GoogleApiWrapper({
    apiKey: ''
  })(MapContainer)
