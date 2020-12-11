import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/material-dashboard.css';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

import Dashboad from "./pages/dashboad/dashboad";
import Login from "./pages/auth/login";
import Creg from "./pages/car_reg/car_reg";
import Footer from "./components/footer/footer";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';





function App() {
  return (
    <Router>
      <div>
        <div className="wrapper ">
        

        <Route exact path='/' component={Login} />
        <Route exact path='/Creg' component={Creg} />

        <Route exact path='/dashboad' component={Dashboad} />

        </div>
      </div>
    </Router>
  );
}

export default App;
