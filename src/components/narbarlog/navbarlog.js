import React, { Component } from "react";
import {
    Link
} from 'react-router-dom';
//import "./newsletter.css";

import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth';


import firebaseApp from '../../firebaseauth';


//const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Navbar extends Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div className="container-fluid">
                    <div className="navbar-wrapper">
                        <Link to="/">
                            <b><font color="#eee">Gadget Doctor</font></b>
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon icon-bar" />
                        <span className="navbar-toggler-icon icon-bar" />
                        <span className="navbar-toggler-icon icon-bar" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end">
                        <form className="navbar-form">
                            <div className="input-group no-border">
                                <input type="text" defaultValue className="form-control" placeholder="Search..." />
                                <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                    <i className="material-icons">search</i>
                                    <div className="ripple-container" />
                                </button>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:;">
                                    <i className="material-icons">dashboard</i>
                                    <p className="d-lg-none d-md-block">
                                        Stats
                        </p>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="material-icons">notifications</i>
                                    <span className="notification">5</span>
                                    <p className="d-lg-none d-md-block">
                                        Some Actions
                        </p>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Mike John responded to your email</a>
                                    <a className="dropdown-item" href="#">You have 5 new tasks</a>
                                    <a className="dropdown-item" href="#">You're now friend with Andrew</a>
                                    <a className="dropdown-item" href="#">Another Notification</a>
                                    <a className="dropdown-item" href="#">Another One</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="javascript:;" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="material-icons">person</i>
                                    <p className="d-lg-none d-md-block">
                                        Account
                        </p>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                                    <a className="dropdown-item" href="#">Profile</a>
                                    <a className="dropdown-item" href="#">Settings</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Log out</a>
                                </div>
                            </li>
                            <Link to="/">
                            <li>
                                <a className="nav-link">
                                    {
                                        user
                                        ? <button onClick={signOut}>Sign out</button>
                                        : <button onClick={signInWithGoogle}>Login</button>

                                    }
                                </a>
                            </li>
                        </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Navbar);