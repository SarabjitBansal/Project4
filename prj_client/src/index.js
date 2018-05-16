import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import './index.css';
import Routes from "./Routes";
// import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
  };

  const Root = () => (
      <div style={styles}>
        <Routes />
      </div>
    );
  ReactDOM.render(<Root />, document.getElementById('root'));
  registerServiceWorker();
