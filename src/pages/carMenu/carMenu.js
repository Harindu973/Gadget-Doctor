import React from 'react';
import {
    Link
} from 'react-router-dom';
import Navlog from "../../components/narbarlog/navbarlog";
import "./carMenu.css";


import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseApp from '../../firebaseauth';


import 'firebase/firestore';
import Navbar from "../../components/narbarlog/navbarlog";
import userEvent from "@testing-library/user-event";

import "../auth/login";



const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

//console.log("property_id",this.props.location.state.property_id);


function CarMenu(para) {

    console.log("yadcjbsduycjdsbcid ",para);

    // const {
    //     user,
    //     signOut,
    //     signInWithGoogle,
    // } = this.props;

    // {
    //     user
    //         ? UID = user.uid
    //         : UID = 'NO Data'
    // }



    const [spells, setSpells] = React.useState([])

    React.useEffect(() => {

        const fetchData = async () => {
            const db = firebase.firestore(firebaseApp)
            const data = await db.collection("users").doc(para.location.state.idlog).collection('Vehicles').get()
            setSpells(data.docs.map(doc => ({...doc.data(), id: doc.id})))

        }

        
        fetchData()
    }, [])

    var sid;

    return (
        <div>
            <Navbar />
        <div class="menu">
            

            <div className="btnbox">
            <center><h1>Select Your Vehicle</h1></center><br /><br /><br />
                
                    {spells.map(spell => (

                    <Link to={{
                        pathname: '/dashboad',
                        state: {
                          id: spell.id
                        }
                      }}><form><input type="hidden" name="ChoosedCar" value={sid = spell.id} /><input type="submit" class="btnsubmit" value={spell.car} /></form></Link>
                    ))}

                <Link  to={{
                        pathname: '/creg',
                        state: {
                          id: sid
                        }
                      }}><input type="button" value="Add New" /></Link>
                      
                
            </div>
        </div>
        </div>
    )
}


export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(CarMenu);
