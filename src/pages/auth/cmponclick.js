// import React, { Component } from "react";

// import withFirebaseAuth from 'react-with-firebase-auth'
// import firebase from 'firebase/app'
// import 'firebase/auth';
// import firebaseConfig from '../../firebaseConfig';




// class Foo extends Component {
//     constructor(props) {
//       super(props);
//       this.handleClick = this.handleClick.bind(this);
//     }
//     async handleClick() {

//       var email = "harindu973@gmail.com";//document.getElementById("useremail").value;
//       var pw = "H123456";// document.getElementById("userpw").value;
//       window.confirm("zzzzzzzzzzzzzzzzzzzzzzzzz<br>etext"+email+pw);
//       await firebase.auth().signInWithEmailAndPassword(email,pw).then(function(firebaseUser) {
//           window.confirm("xxxxxxxxxxxxxxxxxxxxxxxxx<br>etext"+email+pw);
      
//       })
//       .catch(function(error) {
//           // Handle Errors here.
        
//           window.confirm("sorry"+email+pw +error);
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           // ...
//         });
      
  
//       }

//     render() {
//       return <button onClick={this.handleClick2}>Login</button>;
//     }
//   }

//   export default Foo;