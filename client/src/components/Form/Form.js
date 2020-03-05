import React from 'react'
import "./Form.css"

export default function Form(props) {
    return (
        <form>
            <div className="form-group">
                <label className="VacationSearchLabel"></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchVacation"
                    placeholder=" Enter Vacation Place"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
        </button>
        </form>
    )
}
