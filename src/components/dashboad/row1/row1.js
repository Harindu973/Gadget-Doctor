import React, { Component } from "react";
//import "./newsletter.css";

class Newsletter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-warning card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">content_copy</i>
                            </div>
                            <p className="card-category">Used Space</p>
                            <h3 className="card-title">49/50
                          <small>GB</small>
                            </h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons text-danger">warning</i>
                                <a href="javascript:;">Get More Space...</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-success card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">store</i>
                            </div>
                            <p className="card-category">Revenue</p>
                            <h3 className="card-title">$34,245</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons">date_range</i> Last 24 Hours
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-danger card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">info_outline</i>
                            </div>
                            <p className="card-category">Fixed Issues</p>
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
                        <div className="card-header card-header-info card-header-icon">
                            <div className="card-icon">
                                <i className="fa fa-twitter" />
                            </div>
                            <p className="card-category">Followers</p>
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
