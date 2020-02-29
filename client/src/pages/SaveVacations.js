import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container} from "../components/Grid";
import SavedResult from "../components/SavedResult"

class SaveVacation extends Component {
    state = {
        savedVacations: []
    };

    //when this component mounts, grab all books that were save to the database 
    componentDidMount() {
        API.getWeather()
            .then(res => this.setState({ savedVacations: res.data }))
            .catch(err => console.log(err))
    }

    //function to remove book by id
    handleDeleteButton = id => {
        API.deleteVacation(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
                <Jumbotron />
                <Container>
                    <SavedResult savedVacations={this.state.savedVacations} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}



export default SaveVacation;