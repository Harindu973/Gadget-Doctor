import React, { Component } from "react";
import {
    Link
} from 'react-router-dom';



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







    // setDone = () => {
    //     const db = firebase.firestore(firebaseApp)




    //         db.collection("history").doc(this.props.spell.idlog).collection(this.props.spell.brand).doc(this.props.spell.docID).update(
    //             {
    //                 status: "Done"
    //             }
    //         )



    // }






    render() {
        const {
            user,
        } = this.props;

        //console.log(this.props.id);
        console.log("Spell is :", this.props.spell);


        const changeDone = () => {
            const db = firebase.firestore(firebaseApp)
    
    
    
    
                db.collection("history").doc(this.props.spell.idlog).collection(this.props.spell.brand).doc(this.props.spell.docID).update(
                    {
                        status: "check_circle_outline"
                    }
                )
    
        }

        const changePending = () => {
            const db = firebase.firestore(firebaseApp)
    
    
    
    
                db.collection("history").doc(this.props.spell.idlog).collection(this.props.spell.brand).doc(this.props.spell.docID).update(
                    {
                        status: "pending_actions"
                    }
                )
    
        }



        return (

            <>
                
                <td className="td-actions text-right">
                    <button type="button" rel="tooltip" title="Edit Task" id="hovButton" href="#" className="btn btn-primary btn-link btn-sm" onClick={changeDone} >
                        <i className="material-icons">check</i>
                    </button>
                    <button type="button" rel="tooltip" title="Remove" id="hovButtonDel" href="#" className="btn btn-danger btn-link btn-sm" onClick={changePending}>
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





































/*

export const SpellInput = ({ spell }) => {
    const [name, setName] = React.useState(spell.data.name);

    const onUpdate = () => {


        const db = firebase.firestore(firebaseApp)
        db.collection("history").doc(spell.data.idlog).collection(spell.data.brand).doc(spell.data.id).set({ ...spell.data, name})





    }





    return (

            <tr>
                <td>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" onChange={onUpdate} />
                            <span className="form-check-sign">
                                <span className="check" />
                            </span>
                        </label>
                    </div>
                </td>
                <td><b>{spell.service}</b></td>
                <td>{spell.serviceDesc}</td>
                <td className="td-actions text-right">
                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                        <i className="material-icons">edit</i>
                    </button>
                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                        <i className="material-icons">close</i>
                    </button>
                </td>
            </tr>

    )
}
*/
