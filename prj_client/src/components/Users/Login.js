import React, { Component } from 'react';
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Redirect } from 'react-router';
import axios from 'axios';
import { Link } from "react-router-dom";
// import Header from "../Header/Header";
import Footer from "../Footer/Footer";


// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       redirect: false
//     };
//   }
//
//   handleClick = () => {
//
//     console.log(this.state.email);
//     console.log(this.state.password);
//
//     let url = "http://localhost:3333/user_token";
//     let postData = {
//           auth: {
//           email: this.state.email,
//           password: this.state.password
//         }
//     }
//
//     let axiosConfig = {
//       headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         "Access-Control-Allow-Origin": "*",
//       }
//     }
//
//     axios.post(url, postData, axiosConfig)
//       .then((res) => {
//         debugger;
//         console.log("RESPONSE RECEIVED: ", res);
//         let token = res.data.jwt;
//         localStorage.setItem('jwtToken', token);
//         if(res.status === 201) {
//           this.setState({redirect: true})
//         }
//       })
//       .catch((err) => {
//         if(err) {
//           alert("Check your email or password!")
//         };
//       })
//
//   }
//
//   goToHomePage = () => {
//     this.props.history.push('/');
//
//   }
//
//   render() {
//     return (
//       <div>
//
//           <div>
//             <h2 style={{marginTop: '3em' }}>Log In</h2>
//             <TextField
//               hintText="Enter your Email"
//               floatingLabelText="Email"
//               onChange={(event, newValue) =>
//                 this.setState({ email: newValue })
//               }
//             />
//             <br />
//             <TextField
//               type="password"
//               hintText="Enter your Password"
//               floatingLabelText="Password"
//               onChange={(event, newValue) =>
//                 this.setState({ password: newValue })
//               }
//             />
//             <br />
//             <RaisedButton
//               label="Submit"
//               primary={true}
//               style={style}
//               disabled={this.state.email === "" || this.state.password === "" ? true : false}
//               onClick={this.handleClick}
//             />
//           </div>
//
//             {this.state.redirect ? <Redirect to='/allprofiles'/>:null}
//             <Link to = "/Signup" className ="headerLink">{`[SignUp if you don't have a account yet]`}</Link>
//
//             <Footer />
//
//
//
//       </div>
//     );
//   }
// }
// const style = {
//   margin: 15
// };
//
// export default Login;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false
    };


  }

  handleClick = () => {
    let url = "http://localhost:3333/user_token";

    let postData = {
          auth: {
          email: this.state.email,
          password: this.state.password
        }
    }

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    }

    axios.post(url, postData, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        let token = res.data.jwt;
        localStorage.setItem('jwtToken', token);
        if(res.status === 201) {
          this.setState({redirect: true})
        }
      })
      .catch((err) => {
        if(err) {
          alert("Check your email or password!")
        };
      })

  }

  goToHomePage = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>

          <div>

            <h2 style={{marginTop: '3em' }}>Log In</h2>
            <TextField
              hintText="Enter your Email"
              floatingLabelText="Email"
              onChange={(event, newValue) =>
                this.setState({ email: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              disabled={this.state.email === "" || this.state.password === "" ? true : false}
              onClick={this.handleClick}
            />
          </div>

        {this.state.redirect ? <Redirect to='/allprofiles'/>:null}
        <br />
        <Link to="/" className="icon-link">
          Back to home
        </Link>
        <Footer />
      </div>
    );
  }
}
const style = {
  margin: 15
};

export default Login;
