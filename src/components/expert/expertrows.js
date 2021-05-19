import React, { Component, state } from "react";
import "./expert.css";
import Cookies from 'js-cookie';


const cookies = new Cookies();

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

        if(data.posts[c].tags[d].name == Cookies.get('cTitle') || data.posts[c].tags[d].name == Cookies.get('cBrand')){

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
                        <td id="e-content_1" class="rowline"></td>
                        <td ><a href="" id="e-link_1" target="_blank"><button type="button" rel="tooltip" title="Click to see more..."  id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >details </button></a>
                        </td>
                    </tr>
                    <tr>
                        <td id="e-slug_2"></td>
                        <td id="e-content_2" class="rowline"></td>
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





























// import React,{useState,useEffect} from 'react'
// import axios from "axios";

// function Expert() {

//     const[items,setitems] = useState([]);





//     useEffect(() => {
//         var c;
//         var d;
//         axios.get('https://expert.gadgetdoc.tech/ghost/api/v3/content/posts/?key=393518c903a40dad5503c49e49&include=authors,tags')
//         .then(res=>{
            
//             console.log(res.data);
//            // document.getElementById("rowCount").innerHTML="Total Items: "+res.data.length;
//             setitems(res.data.posts);





//         }
//         ).catch(err=>{
//             console.log(err);
//         })
//     }, [])


//     const itemlist=items.map((obj)=>{
//         return <tr>
//                     <td id="e-slug_0">{obj.authors[0].name}</td>
//                     {console.log("List " + obj)}
//                     <td id="e-content_0" class="rowline">{obj.title}</td>
//                     <td ><a href={obj.url} id="e-link_0" target="_blank" ><button type="button" rel="tooltip" title="Click to see more..." target="_blank" id="hovButton2" href="#" className="btn btn-primary btn-link btn-sm"  >details</button></a>
//                     </td>
//                </tr>
        
//     })

//     return (
//         <>
             
//             {console.log("Item List " + itemlist)}
//             {
//             itemlist != ""
//                     ? itemlist
//                     : <p>Loading...</p>
//             }
//         </>
//     )
// }
            
// export default Expert;

