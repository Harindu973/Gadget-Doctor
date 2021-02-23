import React, { Component } from "react";

import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseApp from '../../firebaseauth';

import 'firebase/firestore';


var db = firebase.firestore(firebaseApp);

const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class reg extends Component {

    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }


    handleClick() {



        var UID = document.getElementById("UID").value;
        var Cmileage = document.getElementById("currentMileage").value;
        var carBrand = document.getElementById("carBrand").value;
        var carModel = document.getElementById("carModel").value;
        var modelYear = document.getElementById("modelYear").value;
        var carColour = document.getElementById("carColour").value;
        var lastSMileage = document.getElementById("lastSMileage").value;
        var Calendardate = document.getElementById("Calendardate").value;
        var vNumber = document.getElementById("vNumber").value;
        
       


        



    //Getting suggestions for user



        const fetchData = async () => {
            const db = firebase.firestore(firebaseApp)
            const data = await db.collection("vehicles").doc("Suggessions").collection(carModel).get()

            //setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            //console.log("This thi is",data.docs.map(doc => ({ ...doc.data(), id: doc.id })));




           var temgh = data.docs.map(doc => (doc.data()));
           console.log("Variable : ",temgh);

           var desc = temgh.values();
           console.log("Variable : ",desc);
           for (let elements of desc) { 
            db.collection("history").doc(UID).collection(vNumber).add(
                
                    elements
                
            )
           }
        }
        fetchData()
    



       



        var datetime = new Date();
        var ts = datetime.toISOString().slice(0, 10);

        if (window.confirm("Updating current milage as " + Cmileage + "km? " + UID)) {

            db.collection("users").doc(UID).collection("Vehicles").add({
                car: carModel,
                mileage: Cmileage,
                datetime: ts,
                Vehicle: vNumber,
                Brand: carBrand,
                Model: carModel,
                Year: modelYear,
                Colour: carColour,
                LastServiceMileage: lastSMileage,
                lastSynced: Calendardate,
                LastServiceDate: Calendardate

            })
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });



            // Save it!
            console.log('Thing was saved to the database.');
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }
    }


    render() {
        const {
            user,
        } = this.props;

        //console.log(this.props.id);

        return (
            <div>
                {
                    user
                        ? <input type="hidden" id="UID" value={user.uid}></input>
                        : <input type="hidden"></input>
                }
                <button type="submit" onClick={this.handleClick}>Add My Car</button>
            </div>
        );
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(reg);
