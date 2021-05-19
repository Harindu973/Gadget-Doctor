import React, { Component, state } from "react";
import "./market.css";
import Cookies from 'js-cookie';


const cookies = new Cookies();

class Market extends Component {

    state = {
        loading: true,
        person: null
    };


    async componentDidMount() {


        const url = "https://market.gadgetdoc.tech/wp-json/wc/store/products";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data[0]);


    
        var i;
        var c = 0;
        var d;
        for (i = 0; i < data.length; i++) {
            for (d = 0; d < data[i].tags.length; d++) {

        if(data[i].tags[d].name == Cookies.get('cTitle')){
            this.setState({ person: data[i], loading: false });
            console.log({ person: data[0], loading: false });

            if( c < 3){
            document.getElementById("slug_" + c).innerHTML = this.state.person.name;
            document.getElementById("link_" + c).href = this.state.person.permalink;
            document.getElementById("content_" + c).innerHTML = this.state.person.prices.currency_code+": "+ (Math.round(this.state.person.prices.price) /100).toFixed(2) +" /=";
            c = c+1;
            }
            // console.log({ person: data[i], loading: false });
        }     
    
            }
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
                        <td id="content_0" class="rowline"></td>
                        <td ><a href="" id="link_0" target="_blank" ><button type="button" rel="tooltip" title="Click to see more..." id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >details</button></a>
                        </td>
                    </tr>
                    <tr>
                        <td id="id_1">2</td>
                        <td id="slug_1"></td>
                        <td id="content_1" class="rowline"></td>
                        <td ><a href="" id="link_1" target="_blank"><button type="button" rel="tooltip" title="Click to see more..." id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >details</button></a>
                        </td>
                    </tr>
                    <tr>
                        <td id="id_2">3</td>
                        <td id="slug_2"></td>
                        <td id="content_2" class="rowline"></td>
                        <td ><a href="" id="link_2" target="_blank"><button type="button" rel="tooltip" title="Click to see more..." id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >details</button></a>
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
