import React from "react";
import Footer from "./components/Footer"
import "./App.css"
import SearchBooks from "./pages/SearchBooks";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveVacations from "./pages/SaveVacations";



function App() {
  return (
    <Router>
      <div>
        <Nav />
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
