import React, { Component } from "react";
//import "./newsletter.css";

import {
    Link,
} from 'react-router-dom';



import withFirebaseAuth from 'react-with-firebase-auth';
//import * as firebase from 'firebase/app';
import 'firebase/auth';

import firebase from 'firebase/app'


import firebaseApp from '../../firebaseauth';
import dashboad from "../../pages/dashboad/dashboad";

const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Slidebar extends Component {

    pushDashboad(){
        window.location.reload();
    }


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
                        <Link onClick={this.pushDashboad}>
                            <li className="nav-item active  ">

                                <a className="nav-link">
                                    <i className="material-icons">dashboard</i>
                                    <p>Dashboard</p>
                                </a>

                            </li>
                        </Link>
                        <li className="nav-item ">
                            <a className="nav-link" href="https://market.gadgetdoc.tech/" target="_blank">
                                <i className="material-icons">add_business</i>
                                <p>

                                    <p id="text">Gadget Marketplace</p>
                                </p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="https://forum.gadgetdoc.tech/" target="_blank">
                                <i className="material-icons">groups</i>
                                <p>Gadget Community</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="https://expert.gadgetdoc.tech/" target="_blank">
                                <i className="material-icons">admin_panel_settings</i>
                                <p>Gadget Expert</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="https://android.gadgetdoc.tech/" target="_blank">
                                <i className="material-icons">android</i>
                                <p>Gadget Android</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="https://www.apple.com/app-store/" target="_blank">
                                <i className="material-icons">phone_iphone</i>
                                <p>Gadget IOS</p>
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
