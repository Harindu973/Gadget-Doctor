import React, { Component } from "react";

import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseApp from '../../../firebaseauth';

import 'firebase/firestore';


var db = firebase.firestore(firebaseApp);
var CurrentMileage ='100';
var date;
var UID;

const firebaseAppAuth = firebaseApp.auth(); const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


// db.collection('users').doc('APguG6g0IlZvVYuh08poBfZcxh02').collection('mileage').doc('current')
//     .onSnapshot(function(doc) {
//         CurrentMileage = doc.get('mileage');
//         console.log(CurrentMileage);
//     });




class Newsletter extends Component {
    render() {

        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;

        {
            user
                ? UID = user.uid
                : UID='NO Data'
        }



        db.collection('users').doc(UID).collection('Vehicles').doc('CAP-6382').collection("details").doc("vDetails")
        .onSnapshot(function(doc) {
            CurrentMileage = doc.get('LastServiceMileage');
            date = doc.get('LastServiceDate');
            console.log(CurrentMileage);
            console.log(date);
            var icon = "material-icons";
            document.getElementById("p1").innerHTML = CurrentMileage+"<small>KM</small>";
            document.getElementById("p2").innerHTML = " Last Synced on: "+date;
        });
        
        return (
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-success card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">drive_eta</i>
                            </div>
                            <p className="card-category">Mileage</p>
                            <h3 className="card-title"><h3 id="p1" className="card-title">0
                            </h3></h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                            <i className="material-icons">date_range</i><i id="p2"> Last Synced on: 2020 Oct 21</i>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-info card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">handyman</i>
                            </div>
                            <p className="card-category">Next Service</p>
                            <h3 className="card-title">25000
                          <small>KM</small>
                            </h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons text-danger">warning</i>
                                <a href="javascript:;">Or before : 2021 Jan 20</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-warning card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">info_outline</i>
                            </div>
                            <p className="card-category">Warnings</p>
                            <h3 className="card-title">75</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons">local_offer</i> Tracked from Github
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-danger card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">report</i>
                            </div>
                            <p className="card-category">Issues</p>
                            <h3 className="card-title">+245</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                            <i className="material-icons text-danger">warning</i>Just Updated
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Newsletter);
