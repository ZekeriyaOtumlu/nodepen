
import React, { Component } from "react";
import "./App.css"
import fire from "./config/fire"
import Home from "./home"
import Login from './login'
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
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      < div className='App'>
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    );
  }
}
export default App;