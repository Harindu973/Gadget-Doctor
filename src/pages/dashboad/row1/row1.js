import React, { Component } from "react";
//import "./newsletter.css";

class Newsletter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-success card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">drive_eta</i>
                            </div>
                            <p className="card-category">Mileage</p>
                            <h3 className="card-title">20000
                            <small>KM</small></h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons">date_range</i> Last Synced on: 2020 Oct 21
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-info card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">handyman</i>
                            </div>
                            <p className="card-category">Next Service</p>
                            <h3 className="card-title">25000
                          <small>KM</small>
                            </h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons text-danger">warning</i>
                                <a href="javascript:;">Or before : 2021 Jan 20</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-warning card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">info_outline</i>
                            </div>
                            <p className="card-category">Warnings</p>
                            <h3 className="card-title">75</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons">local_offer</i> Tracked from Github
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-danger card-header-icon">
                            <div className="card-icon">
                            <i className="material-icons">report</i>
                            </div>
                            <p className="card-category">Issues</p>
                            <h3 className="card-title">+245</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons">update</i> Just Updated
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Newsletter;
