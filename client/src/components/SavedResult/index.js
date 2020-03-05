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
                                <Row className="SearchResult" id={savedVacations.name + "Card"} key={savedVacations._id}>
                                    {/* col-3 show image of the vacation */}
                                    <Col size="2" className="bookImage">
                                        <img src={savedVacations.weather} alt={savedVacations.name} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    {/* col-9 show information of the vacation */}
                                    <Col size="9" className="bookInfo">
                                        <Row>
                                            <h2 className="bookTitle">{savedVacations.name}</h2>
                                        </Row>
                                        <Row>
                                        <iframe id="forecast_embed" title={savedVacations.name} frameBorder="0" height="200px" width="60%" src={savedVacations.src}></iframe>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="deleteVacation btn btn-danger" id={savedVacations._id} onClick={() => props.handleDeleteButton(savedVacations._id)}>
                                        Delete Vacation
                                    </button>
                                    <a href={savedVacations.link} target="_blank" rel="noopener noreferrer">
                                        <button className="viewBook btn btn-success">
                                            View Vacation
                                        </button>
                                    </a>
                                </Row>
                                <div>
                                {/* <form>
                                <div className="form-group">
                                <label className="VacationSearchLabel"></label>
                                <br></br>
                                <input className="col-12 form-control"
                                value= 
                                type="text"
                                name=""
                                onChange={props.handleInputChange}
                                    />
                                </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>

        </form> */}
            <input type="checkbox" id="vehicle1" onChange={(event) => props.handleInputChange(event,savedVacations._id,savedVacations.visited )} checked={savedVacations.visited} name="vehicle1" value={savedVacations.visited}></input>
                                </div>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SavedResult;