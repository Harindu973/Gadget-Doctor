import React, { Component } from "react";
import Row1 from "./row1/row1";
import Row2 from "./row2/row2";
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
                            <Row1 />
                            <Row2 />
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="card">
                                        <div className="card-header card-header-tabs card-header-primary">
                                            <div className="nav-tabs-navigation">
                                                <div className="nav-tabs-wrapper">
                                                    <span className="nav-tabs-title">Tasks:</span>
                                                    <ul className="nav nav-tabs" data-tabs="tabs">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" href="#profile" data-toggle="tab">
                                                                <i className="material-icons">bug_report</i> Bugs
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
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                                                            <span className="form-check-sign">
                                                                                <span className="check" />
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="checkbox" defaultValue />
                                                                            <span className="form-check-sign">
                                                                                <span className="check" />
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="checkbox" defaultValue />
                                                                            <span className="form-check-sign">
                                                                                <span className="check" />
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain
                                                                swept through metro Detroit
                                  </td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                                                            <span className="form-check-sign">
                                                                                <span className="check" />
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="tab-pane" id="messages">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                                                            <span className="form-check-sign">
                                                                                <span className="check" />
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain
                                                                swept through metro Detroit
                                  </td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="checkbox" defaultValue />
                                                                            <span className="form-check-sign">
                                                                                <span className="check" />
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="tab-pane" id="settings">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="checkbox" defaultValue />
                                                                            <span className="form-check-sign">
                                                                                <span className="check" />
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                                                            <span className="form-check-sign">
                                                                                <span className="check" />
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain
                                                                swept through metro Detroit
                                  </td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                                                            <span className="form-check-sign">
                                                                                <span className="check" />
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
