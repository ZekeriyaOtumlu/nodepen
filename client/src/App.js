import React, { Component } from "react";
import Footer from "./components/Footer"
import "./App.css"
import searchVacations from "./pages/SearchVacations";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveVacations from "./pages/SaveVacations";
import SearchResult from './components/SearchResult'
import SearchForm from './components/SearchForm'
import  fire  from "./config/fire"
import Home from "./home"
import Info from './utils/API'

import { SignIn, SignUp } from './login'



class App extends Component {  


import { SignIn, SignUp } from './login';
import Login from './login';
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

       
       
        <Switch>
          <Route exact path="/saved" component={SaveVacations} />
          <Route exact path="/" component={searchVacations} />
          <Route exact path="/saved/:id" component={SaveVacations} />
          <Route component={NoMatch} />
        </Switch>
      
        <Footer />
    
  render() {
    return (
      < div className='App'>
        {this.state.user ? (<Home />) : (<Login />)}

      </div>
    );
  }
}
export default App;
