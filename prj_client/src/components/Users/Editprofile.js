import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ImageUpload from "./ImageUpload";
import ResumeUpload from "./ResumeUpload";
import jwtDecoder from "jwt-decode";
import TextField from "material-ui/TextField";
import axios from "axios";
import './Editprofile.css';

// uplod images



// upload images ends
class Editprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,
      name :"",
      email:"",
      password:"",
      password_confirmation:"",
      description:"",
      keyskills:"",
      location:"",
      resumeu:"",
      githubu:"",
      linkedinu:"",
      insta:"",
      twitteru:"",
      success: ""
    };
    this._handleSubmit =this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }
  componentDidMount = async () => {
      console.log(this.props)
    await this.fetchUser();
    };
  _handleSubmit(event) {
    event.preventDefault();
        const user = jwtDecoder(this.props.token);

        let url = `http://localhost:3333/users/${user.sub}.json`;
        console.log("This url with user .sub is ",url);
          debugger;
        axios({
          url: url,
          method: "patch",
          headers: {
            authorization: `Bearer ${this.props.token}`
          },
          data: {

            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            name: this.state.name,
            description:this.state.description,
            keyskills:this.state.keyskills,
            location:this.state.location,
            resumeu:this.state.resumeu,
            githubu:this.state.githubu,
            linkedinu:this.state.linkedinu,
            insta:this.state.insta,
            twitteru:this.state.twitteru
          }
        }).then(res =>
          this.setState({ user: res.data })
        );
  };
  _handleChange(event) {

    if (event.target.id === "name-field") {
      this.setState({
        name: event.target.value
      });
    }
    if (event.target.id === "description-field") {
      this.setState({
        description: event.target.value
      });
    }
    if (event.target.id === "keyskills-field") {
      this.setState({
        keyskills: event.target.value
      });
    }
    if (event.target.id === "location-field") {
      this.setState({
        location: event.target.value
      });
    }
    if (event.target.id === "resumeu-field") {
      this.setState({
        resumeu: event.target.value
      });
    }

    if (event.target.id === "githubu-field") {
      this.setState({
        githubu: event.target.value
      });
    }
    if (event.target.id === "linkedinu-field") {
      this.setState({
        linkedinu: event.target.value
      });
    }
    if (event.target.id === "insta-field") {
      this.setState({
        insta: event.target.value
      });
    }
    if (event.target.id === "twitteru-field") {
      this.setState({
        twitteru: event.target.value
      });
    }

    if (event.target.id === "password-field") {
      this.setState({
        password: event.target.value
      });
    }
    if (event.target.id === "password-confirmation-field") {
      this.setState({
        password_confirmation: event.target.value
      });
    }
  }




    fetchUser = () => {
      const user = jwtDecoder(this.props.token);
      console.log("user inn Edit profile",user);
      axios({
        url: `http://localhost:3333/users/${user.sub}.json`,
        method: "get",
        headers: {
          authorization: `Bearer ${this.props.token}`
        }
      }).then(res => this.setState({
        user: res.data,
        name :res.data.name,
        email:res.data.email,
        description:res.data.description,
        keyskills:res.data.keyskills,
        location:res.data.location,
        resumeu:res.data.resumeu,
        githubu:res.data.githubu,
        linkedinu:res.data.linkedinu,
        insta:res.data.insta,
        twitteru:res.data.twitteru
        }));
    };

  render() {
    debugger;
    if (!this.state.user) {
      return null;
    }
    return (
      <div className="Editprofile">

        <form onSubmit={this._handleSubmit}>
          <div>
              <h1>Edit Profile</h1>
            </div>
          <TextField
            id="name-field"
            hintText="Name"
            floatingLabelText="Name"
            defaultValue={this.state.name}
            onChange={this._handleChange}
          />
            <br />
          <TextField
            id="password-field"
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={this._handleChange}
          />
          <br />
          <TextField
            id="password-confirmation-field"
            type="password"
            hintText="Password confirmation"
            floatingLabelText="Password Confirmation"
            onChange={this._handleChange}
          />

          <br />
          <ImageUpload user={this.state.user}/>
          <br />


          <br />
          <TextField
            id="description-field"
            type="description"
            hintText="description"
            floatingLabelText="description"
            multiLine={true}
            rows={2}
            rowsMax={4}
            defaultValue={this.state.user.description}
            onChange={this._handleChange}
          />
          <br />
          <TextField
            id="keyskills-field"
            type="keyskills"
            hintText="keyskills"
            floatingLabelText="keyskills"
            defaultValue={this.state.user.keyskills}
            onChange={this._handleChange}
          />


          <br />
          <ResumeUpload user={this.state.user}/>
          <br />

          <br />
          <TextField
            id="githubu-field"
            type="githubu"
            hintText="githubu"
            floatingLabelText="githubu"
            defaultValue={this.state.user.githubu}
            onChange={this._handleChange}
          />
          <br />
          <TextField
            id="linkedinu-field"
            type="linkedinu"
            hintText="linkedinu"
            floatingLabelText="linkedinu"
            defaultValue={this.state.user.linkedinu}
            onChange={this._handleChange}
          />
          <br />
          <TextField
            id="insta-field"
            type="insta"
            hintText="insta"
            floatingLabelText="insta"
            defaultValue={this.state.user.insta}
            onChange={this._handleChange}
          />
          <br />
          <TextField
            id="twitteru-field"
            type="twitteru"
            hintText="twitteru"
            floatingLabelText="twitteru"
            defaultValue={this.state.user.twitteru}
            onChange={this._handleChange}
          />
          <br />
          <TextField
            id="location-field"
            type="location"
            hintText="location"
            floatingLabelText="location"
            defaultValue={this.state.user.location}
            onChange={this._handleChange}
          />
          <br /><br />
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.success}</p>

        <Footer />
      </div>
    );
  }
}

export default Editprofile;
