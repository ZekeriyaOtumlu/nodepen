import React, { Component } from 'react'
import Nav from './components/Nav'
import fire from './config/fire'
import Login from './login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SaveVacations from "./pages/SaveVacations";
import SearchResult from './components/SearchResult'
import SearchForm from './components/SearchForm'
import SearchVactions from "./pages/SearchVacations"
import Info from './utils/API'
import NoMatch from "./pages/NoMatch";

// import fire from './config/fire';

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

                <Nav />
                <div>


                    <Switch>
                        <Route exact path="/saved" component={SaveVacations} />
                        <Route exact path="/" component={SearchVactions} />
                        {/* <Route exact path="/" component={SaveVacations} /> */}
                        <Route component={NoMatch} />
                    </Switch>

                    {/* <Footer /> */}
                </div>
            </Router>
        )
    }
}

export default Home;