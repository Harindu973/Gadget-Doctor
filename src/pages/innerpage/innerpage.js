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


import firebaseApp from '../../firebaseauth';


//const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};



class Inner extends Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;
        return (


            <div>
                <Slidebar />
                <div className="main-panel">
                <Navlog />
                </div>
                
                
            </div>
        );
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Inner);