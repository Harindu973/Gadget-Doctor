import React, { Component } from "react";
import Row1 from "./row1/row1";
import Row2 from "./row2/row2";
import Suggessions from "./suggessions/suggessions";
import Issues from "./suggessions/warnings";
import Completed from "./suggessions/done"
import Slidebar from "../../components/slidebar/slidebar";
import Navbar from "../../components/narbar/navbar";
import Footer from "../../components/footer/footer";
import IssueList from '../../components/issuelist/issuelist'
import Market from "./market/market";
import {
    Link
} from 'react-router-dom';

import withFirebaseAuth from 'react-with-firebase-auth';
//import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';

import firebase from 'firebase/app'


import firebaseApp from '../../firebaseauth';
import issuelist from "../../components/issuelist/issuelist";



const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};
var mileage=5000;



class Login extends Component {

    render() {

        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;



        return (
            <div>
                <Slidebar />
                <div className="main-panel">
                    <Navbar />
                    <div className="content">
                        {
                            user
                                ? <input type="hidden" id="UID" value={user.uid}></input>
                                : <input type="hidden"></input>
                        }
                        <div className="container-fluid">
                            <Row1 id={this.props.location.state.id} />
                            <Row2 model={{
                                    model: this.props.location.state.model,
                                    brand: this.props.location.state.brand,
                                    vnumber: this.props.location.state.Vnumber,
                                    id: this.props.location.state.id,
                                    mileage: mileage
                                }} />
                            <div className="row">

                                <Suggessions model={{
                                    brand: this.props.location.state.model,
                                    vnumber: this.props.location.state.Vnumber,
                                    id: this.props.location.state.idlog,
                                    vid: this.props.location.state.id,
                                    mileage: mileage
                                }} />
                                <Issues model={{
                                    vnumber: this.props.location.state.Vnumber,
                                    id: this.props.location.state.idlog,
                                    mileage: mileage
                                }} />
                                <Completed model={{
                                    vnumber: this.props.location.state.Vnumber,
                                    id: this.props.location.state.idlog,
                                    mileage: mileage
                                }} />
                                {/* <Suggessions model={this.props.location.state.model} /> */}
                                
                                <Market />

                            </div>
                        </div>
                    </div>
                   {/* <Footer /> */}
                </div>
            </div>
        );
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);
