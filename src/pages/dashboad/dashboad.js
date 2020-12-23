import React, { Component } from "react";
import Row1 from "./row1/row1";
import Row2 from "./row2/row2";
import Suggessions from "./suggessions/suggessions";
import Slidebar from "../../components/slidebar/slidebar";
import Navbar from "../../components/narbar/navbar";
import Footer from "../../components/footer/footer";
import {
    Link
} from 'react-router-dom';

import withFirebaseAuth from 'react-with-firebase-auth';
//import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';

import firebase from 'firebase/app'


import firebaseApp from '../../firebaseauth';


const firebaseAppAuth = firebaseApp.auth(); const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

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
                        <div className="container-fluid">
                            <Row1 id={this.props.location.state.id} />
                            <Row2 id={this.props.location.state.id} />
                            <div className="row">
                            <Suggessions model={this.props.location.state.model} />
                                
                                <div className="col-lg-6 col-md-12">
                                    <div className="card">
                                        <div className="card-header card-header-warning">
                                            <h4 className="card-title">Employees Stats</h4>
                                            <p className="card-category">New employees on 15th September, 2016</p>
                                        </div>
                                        <div className="card-body table-responsive">
                                            <table className="table table-hover">
                                                <thead className="text-warning">
                                                    <tr><th>ID</th>
                                                        <th>Name</th>
                                                        <th>Salary</th>
                                                        <th>Country</th>
                                                    </tr></thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Dakota Rice</td>
                                                        <td>$36,738</td>
                                                        <td>Niger</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Minerva Hooper</td>
                                                        <td>$23,789</td>
                                                        <td>Curaçao</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Sage Rodriguez</td>
                                                        <td>$56,142</td>
                                                        <td>Netherlands</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Philip Chaney</td>
                                                        <td>$38,735</td>
                                                        <td>Korea, South</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);
