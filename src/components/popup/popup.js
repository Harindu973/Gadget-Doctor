import React , {useState} from 'react';
import {
    Link
} from 'react-router-dom';
import "./popup.css";
import Cookies from 'universal-cookie';


import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseApp from '../../firebaseauth';



import 'firebase/firestore';

import "../../pages/auth/login";



const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const db = firebase.firestore(firebaseApp);



function Issuelist(props) {



    function refresh()
    { 
        window.location.reload();
    }

    const cookies = new Cookies();

    //cookies.set('mypet', 'xxxxx', { path: '/details' });

    const [spells, setSpells] = React.useState([])
    

   
    React.useEffect(() => {
        setTimeout(function () {  
        const fetchData = async () => {

            //getting recomendations
            console.log(props)
            const data = await db.collection("history").doc(props.model.id).collection(props.model.vnumber).get()
            setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))

        }

        fetchData()},);
    }, [])

    return (props.trigger) ? (
        <div className="popup">
        <div className="col-lg-6 col-md-12">
            <div className="card">
                <div className="card-header card-header-tabs card-header-primary">
                    <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                            <span className="nav-tabs-title"></span>
                            <ul className="nav nav-tabs" data-tabs="tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" onClick={refresh}>
                                        <i className="material-icons">refresh</i> Refresh
                                  <div className="ripple-container" />
                                    </a>
                                </li>
                                <button className="close-btn" onClick={refresh}>Close</button>
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
                                            <td>
                                                {spell.service}</td>
                                            <td>{spell.serviceDesc}</td>
                                            {/* <SpellInput spell={{
                                                            docID: spell.id,
                                                            data: spell,
                                                            idlog: props.model.id,
                                                            brand: props.model.brand,
                                                            vnumber: props.model.vnumber
                                                        }} /> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    ) : "";
}


export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Issuelist);


