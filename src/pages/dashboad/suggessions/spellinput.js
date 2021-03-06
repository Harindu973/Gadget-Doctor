import React, { Component } from "react";
import {
    Link
} from 'react-router-dom';
import { useHistory } from 'react-router';



import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseApp from '../../../firebaseauth';


import 'firebase/firestore';
import './spell.css';





const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};


class reg extends Component {


    

    render() {
        const {
            user,
        } = this.props;



        //console.log(this.props.id);
       


        const changeDone = () => {
            const db = firebase.firestore(firebaseApp)




            db.collection("history").doc(this.props.spell.idlog).collection(this.props.spell.vnumber).doc(this.props.spell.docID).update(
                {
                    status: "check_circle_outline"
                }

            )

            timeFunction();
            
        }

        const changePending = () => {
            const db = firebase.firestore(firebaseApp)




            db.collection("history").doc(this.props.spell.idlog).collection(this.props.spell.vnumber).doc(this.props.spell.docID).update(
                {
                    status: "pending_actions"
                }
            )

            timeFunction();
            
        }

        function timeFunction() {

            if (window.confirm("Do you want to change status?")) {
            setTimeout(function () { window.location.reload(); }, 500);
            }
        }




        return (

            <>

                <td className="td-actions text-right">
                    <a><button type="button" rel="tooltip" title="Set to Done" id="hovButton" href="#" className="btn btn-primary btn-link btn-sm" onClick={changeDone} >
                        <i className="material-icons">check</i>
                    </button></a>
                

                    <button type="button" rel="tooltip" title="Set to Pending" id="hovButtonDel" href="#" className="btn btn-danger btn-link btn-sm" onClick={changePending}>
                        <i className="material-icons">close</i>
                    </button>
                </td>
            </>
        );
    }











}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(reg);

