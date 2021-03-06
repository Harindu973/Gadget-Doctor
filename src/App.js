import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/material-dashboard.css';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

import Dashboad from "./pages/dashboad/dashboad";
import Row1 from "./pages/dashboad/row1/row1";

import Login from "./pages/auth/login";
import Creg from "./pages/car_reg/car_reg";
import Footer from "./components/footer/footer";
import CarMenu from "./pages/carMenu/carMenu";
import Inner from "./pages/innerpage/innerpage";

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
        <Route exact path='/creg' component={Creg} />
        <Route exact path='/details' component={Inner} />
        
        <Route path="/carmenu" render={(props) => <CarMenu {...props}/>}/>
        <Route path="/dashboad" render={(props) => <Dashboad {...props}/>}/>

        {/* <Route exact path='/dashboad' component={Dashboad} /> */}

        </div>
      </div>
    </Router>
  );
}

export default App;
