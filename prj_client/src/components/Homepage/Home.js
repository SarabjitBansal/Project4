import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import Header1 from "../Header/Header";
import Footer from "../Footer/Footer";
import './Homepage.css';
class Home extends Component {
  render() {
    return (

      <div className="About">

        <div>
          <p>
          Fed up of putting everything into a job application, getting your hopes up and never hearing anything back?
          Or are you an employer with mountains of CVs and portfolios to get through on top of the rest of your workload?
          Pick Me is a concept for an app which simplifies the application process in the creative industry, for both the applicant and the employer.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
