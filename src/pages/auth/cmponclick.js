import React, { Component } from "react";

import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';




class Foo extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
   handleClick() {
      
    //   var email; //document.getElementById("useremail").value;
    //   var pw;//document.getElementById("userpw").value;
      
    //   firebase.auth().signInWithEmailAndPassword("harindulakshankob@gmail.com","H12345").then(function(firebaseUser) {
    //       window.confirm("xxxxxxxxxxxxxxxxxxxxxxxxxx<br>xxxxxxxxxxxxxxxxxxxxxxxxx<br>xxxxxxxxxxxxxxxxxxxxxxxxx<br>etext"+email+pw);
      
    //   })
    //   .catch(function(error) {
    //       // Handle Errors here.
        
    //       window.confirm("sorry"+email+pw +error);
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       // ...
    //     });
      
        
    }
    render() {
      return <button onClick={this.handleClick}>Login</button>;
    }
  }

  export default Foo;