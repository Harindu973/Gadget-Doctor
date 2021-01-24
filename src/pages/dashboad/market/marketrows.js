import React, { Component, state } from "react";
import "./market.css";

class Market extends Component {

    state = {
        loading: true,
        person: null
    };


    async componentDidMount() {





        const url = "https://market.gadgetdoc.tech/wp-json/wp/v2/product";
        const response = await fetch(url);
        const data = await response.json();


        var i;
        for (i = 0; i < 3; ++i) {
            this.setState({ person: data[i], loading: false });
            document.getElementById("slug_" + i).innerHTML = this.state.person.slug;
            document.getElementById("link_" + i).href = this.state.person.link;
            document.getElementById("content_" + i).innerHTML = this.state.person.content.rendered;
            console.log({ person: data[0], loading: false });

        }




        console.log({ person: data[0], loading: false });


        console.log(this.state.content);
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
                        <td ><a href="" id="link_0" target="_blank"><button type="button" rel="tooltip" title="Click to see more..." id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >more</button></a>
                        </td>
                    </tr>
                    <tr>
                        <td id="id_1">2</td>
                        <td id="slug_1"></td>
                        <td id="content_1" class="rowline">Niger</td>
                        <td ><a href="" id="link_1" target="_blank"><button type="button" rel="tooltip" title="Click to see more..." id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >more </button></a>
                        </td>
                    </tr>
                    <tr>
                        <td id="id_2">3</td>
                        <td id="slug_2"></td>
                        <td id="content_2" class="rowline">Niger</td>
                        <td ><a href="" id="link_2" target="_blank"><button type="button" rel="tooltip" title="Click to see more..." id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >more</button></a>
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
