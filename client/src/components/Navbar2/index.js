import React, { Component } from "react";
import fire from '../../config/fire'


class Nav2 extends Component {
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
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          {/* <a class="navbar-brand" href="#"> Search Landmarks</a> */}
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            {/* <button onClick={this.logout}>Logout</button> */}
          </form>
        </div>
      </nav>
    )
  }
}
export default Nav2;