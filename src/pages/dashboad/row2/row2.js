import React, { Component } from "react";
import './row2.css';
import Update from "./updateclick";
import ServiceUpdate from "./updateService";



class Raw2 extends Component {
    render() {

        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-chart">
                        <div className="card-header card-header-success">

                        </div>
                        <div className="card-body">
                            <p className="card-category">
                                <h4 className="card-title"><b>Update Your Current Mileage</b></h4>
                                <input type="number" class="form-control" id="inputmileage" placeholder="Enter Your Currunt Mileage" min="0" max="1000000"></input>
                            </p>
                        </div>
                        <div className="">
                            <div className="stats">
                                <Update id={this.props.model.id} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-chart">
                        <div className="card-header card-header-info">
                            <div className="ct-chart" id="websiteViewsChart" />
                        </div>
                        <div className="card-body">
                            <p className="card-category">
                                <h4 className="card-title"><b>Update Your Service</b></h4>
                                <input type="number" class="form-control" id="inputservice" placeholder="Enter Your Mileage at Service Date" min="0" max="1000000"></input>
                            </p>
                        </div>
                        <div className="">
                            <div className="stats">
                                <ServiceUpdate id={this.props.model.id} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-chart">
                        <div className="card-header card-header-danger">
                            <div className="ct-chart" id="completedTasksChart" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title"><b>Your Vehicle Info</b></h4>
                            <p className="card-category">{this.props.model.model} | {this.props.model.vnumber}</p>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons">access_time</i> campaign sent 2 days ago
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default Raw2;
