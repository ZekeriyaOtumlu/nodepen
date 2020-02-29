import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"

const SavedResult = props => {
    return (props.savedVacations.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Vacation that You Saved</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Vacation that You Saved</h3>
                    {props.savedVacations.map(savedVacations => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedVacations.title + "Card"} key={savedVacations._id}>
                                    {/* col-3 show image of the book */}
                                    <Col size="2" className="bookImage">
                                        <img src={savedVacations.image} alt={savedVacations.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    {/* col-9 show information of the book */}
                                    <Col size="9" className="bookInfo">
                                        <Row>
                                            <h2 className="bookTitle">{savedVacations.title}</h2>
                                        </Row>
                                        <Row>
                                            <h3 className="bookAuthor">{savedVacations.authors}</h3>
                                        </Row>
                                        <Row>
                                            <p className="bookDescription">{savedVacations.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="deleteVacation btn btn-danger" id={savedVacations._id} onClick={() => props.handleDeleteButton(savedVacations._id)}>
                                        Delete Vacation
                                    </button>
                                    <a href={savedVacations.link} target="_blank">
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
export default SavedResult;