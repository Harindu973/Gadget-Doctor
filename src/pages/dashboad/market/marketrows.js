import React, { Component, state } from "react";
import "./market.css";

class Market extends Component {

    state = {
        loading: true,
        person: null
    };


    async componentDidMount() {





        const url = "https://market.gadgetdoc.tech/wp-json/wc/store/products";
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data[0]);


        var i;
        for (i = 0; i < 5; ++i) {
            this.setState({ person: data[i], loading: false });
            //console.log({ person: data[0], loading: false });
            document.getElementById("slug_" + i).innerHTML = this.state.person.name;
            document.getElementById("link_" + i).href = this.state.person.permalink;
            document.getElementById("content_" + i).innerHTML = this.state.person.prices.currency_code+": "+ (Math.round(this.state.person.prices.price) /100).toFixed(2) +" /=";
           // console.log({ person: data[i], loading: false });
        }




     


        
        //console.log(this.state);

    }



    render() {



        return (
            <>

                {this.state.loading || !this.state.person ? (
                    <div>Loading...</div>
                ) : (<>
                    <tr>
                        <td id="id_0">1</td>
                        <td id="slug_0"></td>
                        <td id="content_0" class="rowline">Niger</td>
                        <td ><a href="" id="link_0" target="_blank" ><button type="button" rel="tooltip" title="Click to see more..." id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >details</button></a>
                        </td>
                    </tr>
                    <tr>
                        <td id="id_1">2</td>
                        <td id="slug_1"></td>
                        <td id="content_1" class="rowline">Niger</td>
                        <td ><a href="" id="link_1" target="_blank"><button type="button" rel="tooltip" title="Click to see more..." id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >details</button></a>
                        </td>
                    </tr>
                    <tr>
                        <td id="id_2">3</td>
                        <td id="slug_2"></td>
                        <td id="content_2" class="rowline">Niger</td>
                        <td ><a href="" id="link_2" target="_blank"><button type="button" rel="tooltip" title="Click to see more..." id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >details</button></a>
                        </td>
                    </tr>
                    <tr>
                        <td id="id_3">4</td>
                        <td id="slug_3"></td>
                        <td id="content_3" class="rowline">Niger</td>
                        <td ><a href="" id="link_3" target="_blank"><button type="button" rel="tooltip" title="Click to see more..." id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >details</button></a>
                        </td>
                    </tr>
                    <tr>
                        <td id="id_4">5</td>
                        <td id="slug_4"></td>
                        <td id="content_4" class="rowline">Niger</td>
                        <td ><a href="" id="link_4" target="_blank"><button type="button" rel="tooltip" title="Click to see more..." id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >details</button></a>
                        </td>
                    </tr>
                </>
                    )
                }

            </>
        );

    }

}
export default Market;
