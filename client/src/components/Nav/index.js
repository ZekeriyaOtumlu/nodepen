import React from "react";
import "./style.css"
import Button from '@material-ui/core/Button';

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">

     
            <div id="navbarNav">
                <ul className="navbar-nav">
                    {/* <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Search Vacation</button></a>
                    </li> */}
                 
                    <Button variant="contained" color="primary" href={props.link} className="savedLandmarks">
     {props.title}
    </Button>
                </ul>
            </div>
           
        </nav>
    );
}

export default Nav;