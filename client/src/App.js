import React from "react";
import Footer from "./components/Footer"
import "./App.css"
import SearchBooks from "./pages/SearchBooks";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SaveVacations from "./pages/SaveVacations";


import SaveBooks from "./pages/SaveBooks";
import Info from './utils/API'


function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* <iframe id="forecast_embed" frameborder="0" height="245" width="100%" src="//forecast.io/embed/#lat=25.3583&lon=-85.0603&name=Miami&color=#00aaff&font=Georgia&units=us"></iframe> */}
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveVacations} />
          <Route exact path="/saved/:id" component={SaveVacations} />
          <Route component={NoMatch} /> 
     
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
