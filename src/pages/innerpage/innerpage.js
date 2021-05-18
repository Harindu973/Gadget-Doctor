import React, { Component } from "react";
import Navlog from "../../components/narbarlog/navbarlog";
import CarMen from '../carMenu/carMenu';
import Onclickcomp from "../../pages/auth/cmponclick";
import Slidebar from "../../components/slidebar/slidebar";
import Cookies from 'js-cookie';

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

const cookies = new Cookies();

class Inner extends Component {


  
  render() {

    const { user, signOut, signInWithGoogle } = this.props;


    if(this.props.location.desc != undefined){
      Cookies.set('cTitle', this.props.location.title, { path: '/details' });
      Cookies.set('cDesc', this.props.location.desc, { path: '/details' });
    }

    // setTimeout(function () {Cookies.set('mypet', this.props.location.desc, { path: '/details' }); }, 0);
    // console.log("Test prop "+this.props.location.desc)
        


    // setTimeout(function() {

    //   this.state = {
    //     Ctitle: Cookies.get('mypet')
    //  }
  
    //  Cookies.set('mypet', this.props.location.title, { path: '/details' });
  
    //  console.log("cookie from :"+Cookies.get('mypet2'));

    // }, 5000);

 

    
    return (
     <>
       
        
          <Navlog /><br /><br /><br />
          <div className="container-fluid">
          <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-primary card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">info_outline</i>
                </div>
                <h3 id="warningsid" className="card-title">
                
                  {
                                this.props.location.title
                                    ? <b>{this.props.location.title}</b>
                                    : <b>{Cookies.get('cTitle')}</b>

                            }
                </h3>
                <p className="card-category">
                  <b>
                  {
                                this.props.location.desc
                                    ? this.props.location.desc
                                    : Cookies.get('cDesc')

                            }
                  </b>
                </p>
                
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">local_offer</i> Tracked by Gadget Doctor
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
      </div></>
    );
  }
}
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Inner);