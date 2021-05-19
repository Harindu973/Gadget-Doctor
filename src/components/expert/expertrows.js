import React, { Component, state } from "react";
import "./expert.css";

class Expert extends Component {

    state = {
        loading: true,
        person: null
    };


    async componentDidMount() {

        const url = "https://expert.gadgetdoc.tech/ghost/api/v3/content/posts/?key=393518c903a40dad5503c49e49&include=authors,tags";
        const response = await fetch(url);
        const data = await response.json();
       
        
        var c;
        var d;
        for (c = 0; c < data.posts.length; c++) {
            for (d = 0; d < data.posts[c].tags.length; d++) {

        if(data.posts[c].tags[d].name == "Grace"){

                this.setState({ post: data, loading: false });
                //console.log(this.state.post.posts[0].tags[1].name);
               // console.log({ post: data, loading: false });
                document.getElementById("e-slug_" + c).innerHTML = this.state.post.posts[c].primary_author.name;
                document.getElementById("e-link_" + c).href = this.state.post.posts[c].url;
                document.getElementById("e-content_" + c).innerHTML = this.state.post.posts[c].title;

        }
       console.log(data.posts[0].tags.length);
       
        }

    }

        //console.log(this.state);

    }



    render() {



        return (
            <>

                {this.state.loading || !this.state.post ? (
                    <div>Loading...</div>
                ) : (<>
                    <tr>
                        <td id="e-slug_0"></td>
                        <td id="e-content_0" class="rowline">Niger</td>
                        <td ><a href="" id="e-link_0" target="_blank" ><button type="button" rel="tooltip" title="Click to see more..." target="_blank" id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >details</button></a>
                        </td>
                    </tr>
                    <tr>
                        <td id="e-slug_1"></td>
                        <td id="e-content_1" class="rowline">Niger</td>
                        <td ><a href="" id="e-link_1" target="_blank"><button type="button" rel="tooltip" title="Click to see more..."  id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >details </button></a>
                        </td>
                    </tr>
                    <tr>
                        <td id="e-slug_2"></td>
                        <td id="e-content_2" class="rowline">Niger</td>
                        <td ><a href="" id="e-link_2" target="_blank"><button type="button" rel="tooltip" title="Click to see more..." id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >details</button></a>
                        </td>
                    </tr>
                </>
                    )
                }

            </>
        );

    }

}
export default Expert;
