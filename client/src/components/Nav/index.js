
import React, { Component } from "react";
import Login from '../../login'
import fire from '../../config/fire'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);

  }

  logout = () => {
    fire.auth().signOut();
}


  render() {
    return (

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#"> Lets Vacay</a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
          </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
          <button onClick={this.logout}>Logout</button>

          </form>
        </div>
      </nav>



    )
  }

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

export default Nav




