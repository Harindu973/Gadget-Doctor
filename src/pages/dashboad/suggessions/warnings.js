import React from 'react';
import {
    Link
} from 'react-router-dom';
//import "./carMenu.css";


import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseApp from '../../../firebaseauth';
import SpellInput from './spellinput.js';
import 'firebase/firestore';
import "../../auth/login";
import "./spell.css";
const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const db = firebase.firestore(firebaseApp);
var Mileage;


function Suggessions(props) {

   const [spells, setSpells] = React.useState([])

    React.useEffect(() => {
        setTimeout(function () {  
        const fetchData = async () => {
         
            
            Mileage = parseInt(document.getElementById("cmileage").value);
            //console.log("Milage is from element ",Mileage);
            const data2 = await db.collection("history").doc(props.model.id).collection(props.model.vnumber).where(('mileage', '<=', Mileage + 5000) && 'status', '==', "pending_actions").get()
            setSpells(data2.docs.map(doc => ({ ...doc.data(), id: doc.id })))



            console.log(data2.docs.map(doc => ({ ...doc.data(), id: doc.id })).length);
           // var data = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));

           document.getElementById("warningsid").innerHTML = data2.docs.map(doc => ({ ...doc.data(), id: doc.id })).length;

        }

        fetchData()});
    }, [])

    return (
        <>
        
        </>

    )
}


export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Suggessions);

