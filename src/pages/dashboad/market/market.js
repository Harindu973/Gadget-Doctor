import React, { Component, state } from "react";
import MarketRow from "./marketrows";
//import "./newsletter.css";

class Market extends Component {

 
    render() {

        
        return (
            <>
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <div className="card-header card-header-warning">
                            <h4 className="card-title">Gadget Marketplace</h4>
                            <p className="card-category">Automobile Marketplace for Car Lovers</p>
                        </div>
                        <div className="card-body table-responsive">
                            <table className="table table-hover">
                                <thead className="text-warning">
                                    <tr><th>ID</th>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Link</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <MarketRow />
                                   

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>



            </>
        );

    }
}
export default Market;
