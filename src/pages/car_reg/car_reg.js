import React, { Component } from "react";
import Navlog from "../../components/narbarlog/navbarlog";
import GetDate from "../../components/external/calanderscript";
import "../../pages/auth/auth";

import {
    Link
} from 'react-router-dom';


import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';


import firebaseApp from '../../firebaseauth';


//const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};




class Car_reg extends Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;


        return (


            <div>
                <Navlog />

                <div className="login-box">
                    <h2>Register Your vehicle</h2>
                    <form onsubmit="flogin()">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="validationCustom04">Vehicle Colour</label>
                                <div className="user-box">
                                    <input type="text" id="carcolour" required />
                                    <label>Colour</label>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="validationCustom04">Vehicle Colour</label>
                                <div className="user-box">
                                    <input type="text" id="carcolour" required />
                                    <label>Colour</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="validationCustom04">Brand</label>
                                <select class="custom-select" id="validationCustom04" required>
                                    <option selected disabled value="">Honda</option>
                                    <option>...</option>
                                    <option>...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="validationCustom04">Model</label>
                                <select class="custom-select" id="validationCustom04" required>
                                    <option selected disabled value="">Grace</option>
                                    <option>...</option>
                                    <option>...</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="validationCustom04">Model Year</label>
                                <select class="custom-select" id="validationCustom04" required>
                                    <option selected disabled value="2022">2022</option>
                                    <option>2021</option>
                                    <option>2020</option>
                                    <option>2019</option>
                                    <option>2018</option>
                                    <option>2017</option>
                                    <option>2016</option>
                                    <option>2015</option>
                                    <option>2014</option>
                                    <option>2013</option>
                                    <option>2012</option>
                                    <option>2011</option>
                                    <option>2010</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="validationCustom04">Vehicle Colour</label>
                                <div className="user-box">
                                    <input type="text" id="carcolour" required />
                                    <label>Colour</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <div class="form-row">&nbsp;</div>
                           
                                <div class="form-row">
                                    
                                        <label for="validationCustom04">Mileage at Last Service</label>
                                        <div className="user-box">
                                            <input type="number" id="carcolour" required />
                                            <label>Mileage</label>
                                        </div>
                                   
                                </div>
                                <div class="form-row">&nbsp;</div>
                                <div class="form-row">
                                        <label for="validationCustom04">Upload a photo of your Vehicle</label>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file" id="customFile" />
                                            <label class="custom-file-label" for="customFile">Choose file</label>
                                        </div>               
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="validationCustom04">Date of Last Service</label>
                                <GetDate />
                            </div>
                        </div>
                        <img src="" className="App-logo" alt="logo" />
                        {
                            user
                                ? <p id="text">Hello, {user.displayName}</p>
                                : <p id="text">Please sign in.</p>
                        }

                        <a>
                            <span />
                            <span />
                            <span />
                            <span />
                        </a>

                        <input type="submit" />

                    </form>
                </div>
            </div>
        );
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Car_reg);