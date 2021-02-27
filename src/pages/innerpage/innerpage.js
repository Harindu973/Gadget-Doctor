import React, { Component } from "react";
import Navlog from "../../components/narbarlog/navbarlog";
import CarMen from '../carMenu/carMenu';
import Onclickcomp from "../../pages/auth/cmponclick";
import Slidebar from "../../components/slidebar/slidebar";

import {
    Link
} from 'react-router-dom';
import Route from "react-router";
import { Redirect } from "react-router-dom";

import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth';

import Market from '../dashboad/market/market';
import Expert from '../../components/expert/expert';


import firebaseApp from '../../firebaseauth';


//const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};



class Inner extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <div>
        <Slidebar />
        <div className="main-panel">
          <Navlog />
          <br /> <br />
          <br />
          <div className="container-fluid">
          <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-info card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">info_outline</i>
                </div>
                <p className="card-category">
                  <b>Warnings</b>
                </p>
                <h3 id="warningsid" className="card-title">
                  0
                </h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">local_offer</i> Tracked from
                  Github
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <Expert />
              <Market />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Inner);