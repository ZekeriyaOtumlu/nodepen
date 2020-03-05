import React, { Component } from 'react'
import Nav from './components/Nav'
import fire from './config/fire'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveVacations from "./pages/SaveVacations";
import SearchVacations from "./pages/SearchVacations"
import Footer from "./components/Footer"
import NoMatch from "./pages/NoMatch";

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            user: {}
        }
    }
    logout = () => {
        fire.auth().signOut();
    }
    render() {
        return (
            <Router>

       
                <div>
                    <Switch>
                        <Route exact path="/saved" component={SaveVacations} />
                        <Route exact path="/" component={SearchVacations} />
                        <Route exact path="/saved/:id" component={SaveVacations} />
                        <Route component={NoMatch} />
                    </Switch>
                    <Footer />

                </div>
            </Router>
        )
    }
}
export default Home;