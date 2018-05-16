// import React, { Component } from "react";
// import { Link } from "react-router-dom";
//
// class Nav extends Component {
//   _signOut() {
//     localStorage.removeItem("jwtToken");
//   }
//   render() {
//     return (
//       <header>
//         <nav className="nav_bar">
//           <Link to="/">
//             <img src={logo} alt=""/>
//           </Link>
//           <Link to = "/about" className ="navTop">About</Link>
//           <Link to = '/allprofiles' className="navTop">Profiles</Link>
//           <Link to = '/jobs' className="navLink">Jobs</Link>
//
//           {/* need to make this not display when on venues page */}
//
//           {window.localStorage.jwtToken ? (
//             <div>
//             <Link to = "/editprofile" className="navLinkHelp">Settings</Link>
//             <Link to ="#"></Link>
//             <Link to="/">
//               <button className= "signOutNav" onClick={this._signOut}>Sign out</button>
//             </Link>
//             </div>
//
//           ) : (
//             <div>
//               <Link to="/signup">Sign Up</Link>
//               <Link to="/login">Login</Link>
//             </div>
//           )}
//         </nav>
//       </header>
//     );
//   }
// }
//
// export default Nav;
