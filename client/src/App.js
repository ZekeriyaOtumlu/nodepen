import React from "react";
import Footer from "./components/Footer"
import "./App.css"
import searchVacations from "./pages/SearchVacations";

import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SaveVacations from "./pages/SaveVacations";



// import Info from './utils/API'



function App() {
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

export default App;
