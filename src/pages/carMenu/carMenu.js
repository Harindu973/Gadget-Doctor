import React from "react";
import Navlog from "../../components/narbarlog/navbarlog";
import "./carMenu.css";

import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseApp from '../../firebaseauth';

import 'firebase/firestore';
import Navbar from "../../components/narbarlog/navbarlog";
import userEvent from "@testing-library/user-event";



var UID = "APguG6g0IlZvVYuh08poBfZcxh02";


const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};






function CarMenu() {

    

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
            const data = await db.collection("users").doc(UID).collection('Vehicles').get()
            setSpells(data.docs.map(doc => doc.data()))
        }
        fetchData()
    }, [])

    return (
        <div>
            <Navbar />
        <div class="menu">

            <div className="btnbox">
                <form>
                    {spells.map(spell => (
                    <buton type="submit" key={spell.name}><center><h2></h2><h3 id="1">spell is : {spell.car}</h3></center></buton>
                    ))}
                </form>
            </div>
        </div>
        </div>
    )
}


export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(CarMenu);
