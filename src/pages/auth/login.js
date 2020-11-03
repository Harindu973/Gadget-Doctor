import React, { Component } from "react";
import Navlog from "../../components/narbarlog/navbarlog";
import Onclickcomp from "../../pages/auth/cmponclick";
import "./auth.css";
import {
    Link
} from 'react-router-dom';

import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';


import firebaseApp from '../../firebaseauth';


//const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};




// var email; //document.getElementById("useremail").value;
// var pw;//document.getElementById("userpw").value;

// firebase.auth().signInWithEmailAndPassword("harindulakshanob@gmail.com","H12345").then(function(firebaseUser) {
//     window.confirm("xxxxxxxxxxxxxxxxxxxxxxxxxx<br>xxxxxxxxxxxxxxxxxxxxxxxxx<br>xxxxxxxxxxxxxxxxxxxxxxxxx<br>etext"+email+pw);

// })
// .catch(function(error) {
//     // Handle Errors here.
  
//     window.confirm("sorry"+email+pw +error);
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });




class Login extends Component {
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
                    <h2>Login</h2>
                    <form onsubmit="flogin()">
                        <div className="user-box">
                            <input type="text" id="useremail" required />
                            <label>Username</label>
                        </div>
                        <div className="user-box">
                            <input type="password" id="userpw" required />
                            <label>Password</label>
                        </div>
                        <img src="" className="App-logo" alt="logo" />
                        {
                            user
                                ? <p id="text">Hello, {user.displayName}</p>
                                : <p id="text">Please sign in.</p>
                        }

                        <a>
                            <span />
                            <span />
                            <span />
                            <span />
                            <Onclickcomp />
                    </a>
                    
                        <input type="submit" /> 
                        {
                                user
                                    ? <button onClick={signOut}>Sign out</button>
                                    : <button onClick={signInWithGoogle}><Link to="/dashboad" >or Login With Google</Link></button>

                            }
                            
                            
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