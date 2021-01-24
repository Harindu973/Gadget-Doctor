import React, { Component, state } from "react";
import MarketRow from "./marketrows";
//import "./newsletter.css";

class Market extends Component {

    state = {
        loading: true,
        person: null
    };

    async componentDidMount() {





        const url = "https://market.gadgetdoc.tech/wp-json/wp/v2/product";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({ person: data[2], loading: false });

        console.log(data[0]);
        console.log({ person: data[0], loading: false });

        // var product;
        // for (var i = 0; i < data.length; ++i) {



        //   }

    }



    render() {

        
        return (
            <>
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
                                        <th>Item</th>
                                        <th>Description</th>
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
