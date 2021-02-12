import React from 'react';
import {
    Link
} from 'react-router-dom';
import "./carMenu.css";


import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseApp from '../../firebaseauth';


import 'firebase/firestore';
import Navbar from "../../components/narbarlog/navbarlog";


import "../auth/login";



const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};




function CarMenu(para) {

    //console.log("yadcjbsduycjdsbcid ",para);




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
            <center><h1>Select Your Vehicle</h1><br /><br /><br />
                
                    {spells.map(spell => (

                    <Link to={{
                        pathname: '/dashboad',
                        state: {
                          id: spell.id,
                          model: spell.car,
                          idlog: para.location.state.idlog
                        }
                      }}><form><input type="hidden" name="ChoosedCar" value={sid = spell.id} /><input type="submit" class="bubbly-button" value={spell.car} /></form></Link>
                    ))}
                    </center>

                <Link  to={{
                        pathname: '/creg',
                        state: {
                          id: sid,
                          idlog: para.location.state.idlog
                        }
                      }}>
                          <br /><br /><button className="btn btn-success" type="button" value="Add New" >Add New Vehicle</button></Link>
                      
                
                      </div>
        </div>
        </div>
    )
}


export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(CarMenu);
