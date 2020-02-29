import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"


class searchVacations extends Component {
    //create state
    state = {
        search: "",
        books: [],
        error: "",
        message: "",
        lat: "25.7616798",
        lng:  "-80.1917902",
        src: ''
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = (event, query) => {

        console.log("run")
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
        API.weatherSearch(this.state.search)
            .then(res => {

                console.log(res)
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {

                    
                    this.setState({lat: res.data.results[0].geometry.location.lat})
                    console.log(this.state.lat)
                    this.setState({lng: res.data.results[0].geometry.location.lng})
                    console.log(this.state.lng)

                    this.setState({src: `http://forecast.io/embed/#lat=${this.state.lat}&lon=${this.state.lng}&name=Your%20Location&color=#00aaff&font=Georgia&units=us`})
                    console.log(this.state.src)
                    // store response in a array
                    // let results = res.data.items
                    // //map through the array 
                    // results = results.map(result => {
                    //     //store each book information in a new object 
                    //     result = {
                    //         key: result.id,
                    //         id: result.id,
                    //         title: result.volumeInfo.title,
                    //         author: result.volumeInfo.authors,
                    //         description: result.volumeInfo.description,
                    //         image: result.volumeInfo.imageLinks.thumbnail,
                    //         link: result.volumeInfo.infoLink
                    //     }
                    //     return result;
                    // })
                    // // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                    // this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));

            API.placeSearch(query).then(res => {
                console.log(res)
            })
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.books)
        let savedVacations = this.state.books.filter(book => book.id === event.target.id)
        savedVacations = savedVacations[0];
        API.saveVacation(savedVacations)
            .then(this.setState({ message: alert("Your Vacation is saved") }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid>
        <iframe id="forecast_embed" frameborder="0" height="245" width="100%" src={this.state.src}></iframe>

                <Jumbotron>
                    <h1 className="text-white">Select Your Favorite Vacation </h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }


}

export default searchVacations;