import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
// import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"
import './styles.css';
import { List, ListItem } from "../components/List"
import Nav from "../components/Nav"
const APIKEY = "&key=AIzaSyAE2CIuMnHiuUN7XLs9fRiATGN1gD-t0LY";
const photoBaseURL = 'https://maps.googleapis.com/maps/api/place/photo?&maxwidth=360&photoreference=';



class searchVacations extends Component {
    //create state
    state = {
        search: "",
        vacations: [],
        vacationContent: [],
        error: "",
        // message: "",
        lat: "25.7616798",
        lng: "-80.1917902",
        src: '',
        name: '',
        id: " ",
        image: " ",
        pagename: "saved Landmarks",
        link: "/saved"

    };


    //function to take value of what enter in the search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = (event, query) => {

        // console.log("run")
        event.preventDefault();
        // once it clicks it connects to the google vacation api with the search value
        API.VacationSearch(this.state.search)
            .then(res => {

                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {

                    // console.log(res.data.results)
                    this.setState({ lat: res.data.results[0].geometry.location.lat })
                    // console.log(this.state.lat)
                    this.setState({ lng: res.data.results[0].geometry.location.lng })
                    // console.log(this.state.lng)
                    this.setState({ name: res.data.results[0].formatted_address })

                    this.setState({ src: `http://forecast.io/embed/#lat=${this.state.lat}&lon=${this.state.lng}&name=${this.state.name}&color=#00aaff&font=Georgia&units=us` })
                    // console.log(this.state.src)
                    // store response in a array
                    // let results = res.data.items
                    // //map through the array 
                    // results = results.map(result => {
                    //     //store each vacation information in a new object 
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
                    // // reset the sate of the empty vacations array to the new arrays of objects with properties geting back from the response
                    // this.setState({ vacations: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));

        API.placeSearch(this.state.search).then(res => {
            console.log(res)

            let vacationContent = [];

            for (let i = 0; i < res.data.length && i < 7; i++) {

                vacationContent[i] = {
                    id: (res.data[i].id),
                    name: (res.data[i].name),
                    address: (res.data[i].formatted_address),
                    image: (photoBaseURL + res.data[i].photos[0].photo_reference + APIKEY)
                }
            }
            this.setState({ vacationContent: vacationContent })
            console.log(this.state.vacationContent)


        });




    }

    handleSavedButton = ({id, name, address, image: weather}, src) => {

        console.log(id)
        console.log(name)
        console.log(address)
        console.log(weather)
        console.log(src)
        // console.log(res)

        let saveInfo = {
            id,
            name,
            address,
            weather,
            src
        }

        console.log(saveInfo)

        // console.log(event)
        // event.preventDefault();
        // console.log(this.state.vacations)
        // let savedVacations = this.state.vacations.filter(vacation => vacation.id === event.res.id)
        // savedVacations = savedVacations[0];
        API.saveVacation(saveInfo)
            .then(this.setState(alert("Your Vacation is saved")))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid>
       <Nav title={this.state.pagename} link={this.state.link}> </Nav>


                <Jumbotron />
                <Jumbotron
                
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                
                
                
                />
{/*     
                <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            /> */}




                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />

                <Container>
                    <Row>
                        <Col size="12">

                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchResult vacations={this.state.vacations} handleSavedButton={this.handleSavedButton} />
                </Container>

                <List>
                    {this.state.vacationContent.map(res => {
                        return (
                            <ListItem key={res.id}>
                                <div className="fullResults">

                                    <div className="name">
                                        <h3>
                                            {res.name}
                                        </h3>
                                    </div>
                                    <div className="center">
                                        <img id="placeImg" src={res.image}></img>
                                        <iframe id="forecast_embed" title={res.name} frameBorder="0" height="200px" width="60%" src={this.state.src}></iframe>
                                        {/* <button className="saveVacation btn btn-primary" id={res.id}
                            //  onClick={(event) => props.handleSavedButton(event)}
                             >

                                Save

                            </button> */}
                                        <button className="saveVacation btn btn-primary" id={this.state.id} onClick={(event) => this.handleSavedButton(res, this.state.src)}>
                                            Save
                            </button>



                                    </div>
                                    <div className="address">
                                        {res.address}
                                    </div>
                                    <hr></hr>
                                </div>

                            </ListItem>
                        );
                    })}
                </List>

            </Container>
        )
    }


}

export default searchVacations;