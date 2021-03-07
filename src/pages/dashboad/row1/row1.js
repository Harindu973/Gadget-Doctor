import React, { Component } from "react";

import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseApp from '../../../firebaseauth';

import 'firebase/firestore';


var db = firebase.firestore(firebaseApp);
var LastMilage ='100';
var mileage;
var date;
var nextService;
var UID;

const firebaseAppAuth = firebaseApp.auth(); const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


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



        db.collection('users').doc(UID).collection('Vehicles').doc(this.props.id)
        .onSnapshot(function(doc) {
            LastMilage = parseInt(doc.get('LastServiceMileage'));
            mileage = doc.get('mileage');
            date = doc.get('lastSynced');
            nextService = doc.get('LastServiceDate');
            var icon = "material-icons";
            document.getElementById("p1").innerHTML = mileage+"<small>KM</small>";
            document.getElementById("p2").innerHTML = " Last Synced on: "+date;
            document.getElementById("p3").innerHTML = " Or Before: "+nextService;
            //var j = parseInt(LastMilage);cmileage

            document.getElementById("cmileage").value = mileage;

            document.getElementById("next").innerHTML = LastMilage+5000 +"<small>KM</small>";
            


            //db.collection("users").doc(UID).collection("test").add(doc.data());






        });
        
        return (
            <div className="row">
                <input type="hidden" id="cmileage" value="5000" />
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-success card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">drive_eta</i>
                            </div>
                            
                            <p className="card-category"><b>Mileage</b></p>
                            <h3 className="card-title"><h3 id="p1" className="card-title">Loading
                            </h3></h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                            <i className="material-icons">date_range</i><i id="p2"> Last Synced on: Loading</i>
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
                            <p className="card-category"><b>Next Service</b></p>
                            <h3 className="card-title" id="next">Loading
                            </h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons">date_range</i><i id="p3"> Or Before: Loading</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-info card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">check_circle_outline</i>
                            </div>
                            <p className="card-category"><b>Completed</b></p>
                            <h3 id="doneID" className="card-title">Loading</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                            <i className="material-icons text-danger">warning</i>Just Updated
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-danger card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">info_outline</i>
                            </div>
                            <p className="card-category"><b>Warnings</b></p>
                            <h3 id="warningsid" className="card-title">Loading</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons">local_offer</i> Tracked from Github
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
