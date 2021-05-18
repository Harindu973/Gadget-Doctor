import React, { Component , useState } from "react";
import Navlog from "../../components/narbarlog/navbarlog";
import CarMen from '../carMenu/carMenu';
import Onclickcomp from "../../pages/auth/cmponclick";
import "./auth.css";
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




class Login extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       email: "",
    //       pw:""
    //     };
    // }

    
    // setEmail = () => {
    //     this.setState({
    //         email: document.getElementById("useremail").value,
    //     })
    //     console.log(this.state.email+this.state.pw);
    //     return this.state.email;
    //   }

    // setPw = () => {
    //     this.setState({
    //         pw: document.getElementById("userpw").value,
    //     })
    //     console.log(this.state.email+this.state.pw);
    //     return this.state.pw;
    //   }

async flogin(){
    
    //var email = "harindu973@gmail.com";//document.getElementById("useremail").value;
    //var pw = "H123456";// document.getElementById("userpw").value;
    console.log("loging  sjd  "+this.state.email+this.state.pw);
    window.confirm("zzzzzzzzzzzzzzzzzzzzzzzzz<br>etext"+this.state.email+this.state.pw);
    await firebase.auth().signInWithEmailAndPassword("harindu973@gmail.com","H123456").then(function(firebaseUser) {
        window.confirm("xxxxxxxxxxxxxxxxxxxxxxxxx<br>etext"+this.state.email+this.state.pw);
    
    })
    .catch(function(error) {
        // Handle Errors here.
      
        window.confirm("sorry"+this.state.email+this.state.pw +error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    
    }

    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;
        return (
            <div>
                <Navlog />
                <div className="login-box">
                   <center><h4><font color="#eee">Use your Google account to</font></h4></center>
                   <h2>Login and SignUp</h2>
                    <form method="GET">

                        <center>
                            <div id="logoIcon"  ></div>
                            <br />
                            {
                            user
                                ? <p id="text">Hello,<Redirect to={{
                                    pathname: '/carmenu',
                                    state: {
                                      idlog: user.uid
                                    }
                                  }} />
                                
                            </p>
                                : <p id="text">Please sign in.</p>
                        }

                        {
                                user
                                    ? <button onClick={signOut}>Sign out</button>
                                    : <div id="btnLwg" onClick={signInWithGoogle}></div>

                            }
                            
                            </center>  
                            
                    </form>
                </div>
            </div>
        );
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);