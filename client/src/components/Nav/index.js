
import React from "react";
import "./style.css"
import Button from '@material-ui/core/Button';
import fire from "../../config/fire"
function logout() {
    fire.auth().signOut();
  }
function Nav(props) {
    return (
        <nav className="nav1">
            <div id="navbarNav1">
                <ul className="navbar1-nav">
                    {/* <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Search Vacation</button></a>
                    </li> */}
<Button variant="contained" color="primary" href={props.link}  className="savedLandmarks">
                        {props.title}
                    </Button>
                    <Button variant="contained" color="primary" onClick={logout} className="savedLandmarks">
                       Log Out
                    </Button>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;











