import React, { Component } from "react";
import Footer from "./components/Footer"
import "./App.css"
import searchVacations from "./pages/SearchVacations";

import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SaveBooks from "./pages/SaveBooks";
import { fire } from "./config/fire"
import Info from './utils/API'
import { SignIn, SignUp } from './login'

// import Weather from './components/Weather/weather'


class App extends Component {

  state = {
    user: {}
  }

  componentDidMount = () => {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {

      if (user) {
        console.log(user)
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  
render() {
  return (
    <Router>
      <div>

        {/* <iframe id="forecast_embed" frameborder="0" height="245" width="100%" src="//forecast.io/embed/#lat=25.3583&lon=-85.0603&name=Miami&color=#00aaff&font=Georgia&units=us"></iframe> */}
        <Switch>
          <Route exact path="/saved" component={SaveVacations} />
          <Route exact path="/" component={searchVacations} />
          <Route exact path="/saved/:id" component={SaveVacations} />
          <Route component={NoMatch} />
        </Switch>
        <Nav />
        <Footer />
      </div>
    </Router>
  );
}
}



export default App;
