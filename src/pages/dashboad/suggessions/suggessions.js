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
var Mileage = 15000;


function Suggessions(props) {

    function refresh()
    { 
        window.location.reload();
    }

    

    const [spells, setSpells] = React.useState([])

    React.useEffect(() => {
        setTimeout(function () {  
        const fetchData = async () => {
         
            
            Mileage = parseInt(document.getElementById("cmileage").value);
            var Mileage2 = Mileage + 5000;
            console.log("Milage is from element 1 :",Mileage);
            console.log("Milage is from element 2 :  ",Mileage2);
            const data = await db.collection("history").doc(props.model.id).collection(props.model.brand).where('mileage', '>=', Mileage).where('mileage', '<=', Mileage2).get()
            setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))




        }

        fetchData()}, 4000);
    }, [])

    return (
        <div className="col-lg-6 col-md-12">
            <div className="card">
                <div className="card-header card-header-tabs card-header-primary">
                    <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                            <span className="nav-tabs-title">Tasks:</span>
                            <ul className="nav nav-tabs" data-tabs="tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" onClick={refresh}>
                                        <i className="material-icons">refresh</i> Refresh
                                  <div className="ripple-container" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#messages" data-toggle="tab">
                                        <i className="material-icons">code</i> Website
                                  <div className="ripple-container" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#settings" data-toggle="tab">
                                        <i className="material-icons">cloud</i> Server
                                  <div className="ripple-container" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane active" id="profile">
                            <table className="table">
                                <tbody>


                                    {spells.map(spell => (
                                        <tr>
                                            <td>
                                                <i className="material-icons">{spell.status}</i>
                                            </td>
                                            <td><b>{spell.service}</b></td>
                                            <td>{spell.serviceDesc}</td>
                                            <SpellInput spell={{
                                                            docID: spell.id,
                                                            data: spell,
                                                            idlog: props.model.id,
                                                            brand: props.model.brand
                                                        }} />
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Suggessions);

