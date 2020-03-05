import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container} from "../components/Grid";
import SavedResult from "../components/SavedResult"
import './saveVacation.css';
import Nav from "../components/Nav"

class SaveVacation extends Component {
    state = {
        savedVacations: [],
        pagename: "Search Landmarks",
        link: "/"
    };

    //when this component mounts, grab all vacations that were save to the database 
    componentDidMount() {
        API.getVacation()
            .then(res => this.setState({ savedVacations: res.data}))
            .catch(err => console.log(err))
    }

    //function to remove vacation by id
    handleDeleteButton = id => {
        API.deleteVacation(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
                 <Nav title={this.state.pagename} link={this.state.link}> </Nav>
                <Jumbotron />
                <Container>
                    <SavedResult savedVacations={this.state.savedVacations} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}



export default SaveVacation;