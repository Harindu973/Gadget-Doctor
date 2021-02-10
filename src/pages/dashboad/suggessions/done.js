import React from 'react';

//import "./carMenu.css";


import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseApp from '../../../firebaseauth';


import 'firebase/firestore';

import "../../auth/login";



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
            console.log("Milage is from element ",Mileage);
            const data3 = await db.collection("history").doc(props.model.id).collection(props.model.brand).where(('mileage', '<=', Mileage + 5000) && 'status', '==', "check_circle_outline").get()
            setSpells(data3.docs.map(doc => ({ ...doc.data(), id: doc.id })))



            console.log(data3.docs.map(doc => ({ ...doc.data(), id: doc.id })).length);
           // var data = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));

           document.getElementById("doneID").innerHTML = data3.docs.map(doc => ({ ...doc.data(), id: doc.id })).length;


        }

        fetchData()}, 100);
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

