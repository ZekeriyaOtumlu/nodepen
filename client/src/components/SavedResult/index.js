import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"

const SavedResult = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Books that You Saved</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Books that You Saved</h3>
                    {props.savedBooks.map(savedBooks => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedBooks.title + "Card"} key={savedBooks._id}>
                                    {/* col-3 show image of the book */}
                                    <Col size="2" className="bookImage">
                                        <img src={savedBooks.image} alt={savedBooks.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    {/* col-9 show information of the book */}
                                    <Col size="9" className="bookInfo">
                                        <Row>
                                            <h2 className="bookTitle">{savedBooks.title}</h2>
                                        </Row>
                                        <Row>
                                            <h3 className="bookAuthor">{savedBooks.authors}</h3>
                                        </Row>
                                        <Row>
                                            <p className="bookDescription">{savedBooks.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="deleteBook btn btn-danger" id={savedBooks._id} onClick={() => props.handleDeleteButton(savedBooks._id)}>
                                        Delete Book
                                    </button>
                                    <a href={savedBooks.link} target="_blank">
                                        <button className="viewBook btn btn-success">
                                            View Book
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