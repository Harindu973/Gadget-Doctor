import React, { Component } from "react";
//import "./newsletter.css";

import {
    Link
} from 'react-router-dom';



import withFirebaseAuth from 'react-with-firebase-auth';
//import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';

import firebase from 'firebase/app'


import firebaseApp from '../../firebaseauth';


const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};



class Slidebar extends Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;
        return (
            <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                {/*
                Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
                
                Tip 2: you can also add an image using data-image tag
                    */}
                <div className="logo"><a href="#" className="simple-text logo-normal">
                    Gadget Doctor
                    </a></div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <Link to="/dashboad">
                            <li className="nav-item active  ">

                                <a className="nav-link" href="./dashboard.html">
                                    <i className="material-icons">dashboard</i>
                                    <p>Dashboard</p>
                                </a>

                            </li>
                        </Link>
                        <li className="nav-item ">
                            <a className="nav-link" href="./user.html">
                                <i className="material-icons">person</i>
                                <p>                        {
                            user
                                ? <p id="text">{user.displayName}</p>
                                : <p id="text">Your Profile</p>
                        }</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="./tables.html">
                                <i className="material-icons">content_paste</i>
                                <p>Table List</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="./typography.html">
                                <i className="material-icons">library_books</i>
                                <p>Typography</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="./icons.html">
                                <i className="material-icons">bubble_chart</i>
                                <p>Icons</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="./map.html">
                                <i className="material-icons">location_ons</i>
                                <p>Maps</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="./notifications.html">
                                <i className="material-icons">notifications</i>
                                <p>Notifications</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="./rtl.html">
                                <i className="material-icons">language</i>
                                <p>RTL Support</p>
                            </a>
                        </li>
                        <Link to="/">
                        <li className="nav-item active-pro ">   
                            <a className="nav-link">
                                <i className="material-icons">assignment_return</i>
                                {
                                user
                                    ? <button onClick={signOut}><p>Sign out</p></button>
                                    : <button onClick={signInWithGoogle}><p>With Google</p></button>

                            }                      
                            </a>
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        );
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Slidebar);
