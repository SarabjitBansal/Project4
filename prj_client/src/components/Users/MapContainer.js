
import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import axios from "axios";
import './Allprofile.css';

export class MapContainer extends PureComponent {

  constructor(props) {
      super(props);
      this.state = {
      resultdata1:[]
    };
      let k = props.locsearch;
      console.log("K is ",k);
      this.fetchuser = this.fetchuser.bind(this);

    }

  componentDidMount() {
    this.fetchuser()
  }
  componentWillReceiveProps(){
    this.fetchuser()
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


    render() {

      const markers = () => {
        return (
          this.state.resultdata1.map( (loc) =>
            <Marker position={{ lat: loc.latitude , lng: loc.longitude }} />
          )
        )
      }

      return (

        <Map google={this.props.google}
        initialCenter={{
             lat: -33.8688197,
             lng: 151.20929550000005
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
