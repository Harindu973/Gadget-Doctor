import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/material-dashboard.css';

import Slidebar from "./components/slidebar/slidebar";
import Navbar from "./components/narbar/navbar";
import Dashboad from "./components/pages/dashboad/dashboad";
import Example from "./components/pages/example/examble";
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

          <Slidebar />

          <div className="main-panel">


            <Navbar />



            <Route exact path='/' component={Example} />
            <Route exact path='/dashboad' component={Dashboad} />
            


            <Footer />

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
