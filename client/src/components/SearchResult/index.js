import React from "react";
import "./style.css";
import {Row, Col} from "../Grid"

const SearchResult = props => {
    return (props.vacations.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Search Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Search Results</h3>
                        {props.vacations.map(vacation => {
                            return (
                                <li className="search-list list-group-item">

                                    <Row className="SearchResult row" id={vacation.title + "Card"} key={vacation._id}>
                                        {/* col-3 show image of the vacation */}
                                        <Col size="2" className="bookImage">
                                            <img src={vacation.image} alt={vacation.title} />

                                    <Row className="SearchResult row" id={vacation.name + "Card"} key={vacation._id}>
                                        {/* col-3 show image of the vacation */}
                                        <Col size="2" className="bookImage">
                                            <img src={vacation.image} alt={vacation.name} />

                                        </Col>
                                        <Col size="1" className="emptyCol"/>
                                        {/* col-9 show information of the vacation */}
                                        <Col size="9" className="bookInfo">
                                            <Row>

                                                <h3 className="bookTitle">{vacation.title}</h3>
                                            </Row>
                                            <Row>
                                                <h4 className="bookAuthor">{vacation.author}</h4>
                                            </Row>
                                            <Row>
                                                <p className="bookDescription">{vacation.description}</p>

                                                <h3 className="bookTitle">{vacation.name}</h3>
                                            </Row>
                                            <Row>
                                                <h4 className="bookAuthor">{vacation.image}</h4>
                                            </Row>
                                            <Row>
                                                <p className="bookDescription">{vacation.weather}</p>

                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row className="buttonDiv ">
                                        <button className="saveVacation btn btn-primary" id={vacation.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save Vacation
                                        </button>
                                        <a href={vacation.link} target="_blank" rel="noopener noreferrer">
                                            <button className="viewBook btn btn-success">
                                                View Vacation
                                        </button>
                                        </a>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchResult;