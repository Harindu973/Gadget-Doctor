import React, { Component } from "react";

import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseApp from '../../../firebaseauth';

import 'firebase/firestore';


var db = firebase.firestore(firebaseApp);

const firebaseAppAuth = firebaseApp.auth(); const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


class Fooo extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {


    var Cmileage = 123;
    Cmileage = document.getElementById("inputmileage").value;
    var UID = document.getElementById("UID").value;
    var datetime = new Date();
    var ts = datetime.toISOString().slice(0,10);
   
    if (window.confirm("Do you want to update your Current Mileage as " + Cmileage+"km ?")) {

      db.collection("users").doc(UID).collection("Vehicles").doc(this.props.id).update({
        mileage: Cmileage,
        lastSynced: ts
      })
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });



      // Save it!
      console.log('Thing was saved to the database.');
      document.getElementById("inputmileage").value="";
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }

  }

  

  render() {
    const {
        user,
        signOut,
        signInWithGoogle,
    } = this.props;
    return (
      <div>
        {
                            user
                                ? <input type="hidden" id="UID" value={user.uid}></input>
                                : <input type="hidden"></input>
                        }
        <button type="button" onClick={this.handleClick} class="btn btn-link" ><font color="#4FA953">Update</font></button> 
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Fooo);