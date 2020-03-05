import React from "react";
import "./style.css";
// import SearchForm from "../../components/SearchForm"

const SearchForm = props => {
    return (

        <div className="jumbotron jumbotron-fluid d-flex align-items-center">
        <div className="container text-center">
         <h1 id="title">Find Landmarks Anywhere in the World</h1>
        </div>
        <form>
            <div className="form-group">
                <label className="VacationSearchLabel"></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchVacation"
                    placeholder="Enter Vacation Place"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
        </div>
    )
}

export default SearchForm;



