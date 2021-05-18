import React, { Component, state } from "react";
import ExpertRow from "./expertrows";
//import "./newsletter.css";

class Expert extends Component {
    

 
    render() {

        
        return (
            <>
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <div className="card-header card-header-info">
                            <h4 className="card-title">Gadget Experts</h4>
                            <p className="card-category">Theese are the expert's articles we are recommending for you.</p>
                        </div>
                        <div className="card-body table-responsive">
                            <table className="table table-hover">
                                <thead className="text-info">
                                    <tr>
                                        <th>Author</th>
                                        <th>Title</th>
                                        <th>Link</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <ExpertRow />
                                   

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>



            </>
        );

    }
}
export default Expert;
