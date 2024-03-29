import React, { Component } from "react";
//import "./newsletter.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <nav className="float-left">
                        <ul>
                            <li>
                                <a href="https://www.creative-tim.com">
                                    Creative Tim
                      </a>
                            </li>
                            <li>
                                <a href="https://creative-tim.com/presentation">
                                    About Us
                      </a>
                            </li>
                            <li>
                                <a href="http://blog.creative-tim.com">
                                    Blog
                      </a>
                            </li>
                            <li>
                                <a href="https://www.creative-tim.com/license">
                                    Licenses
                      </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright float-right">
                        ©
                  , made with <i className="material-icons">favorite</i> by
                  <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> for a better web.
                </div>
                </div>
            </footer>
        );
    }
}
export default Footer;
