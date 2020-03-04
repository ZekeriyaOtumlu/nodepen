import React from "react";
// import Footer from "./components/Footer"
// import "./App.css"
// import searchVacations from "./pages/SearchVacations";
import vacationContent from "../../pages/SearchVacations"
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import SaveVacations from "./pages/SaveVacations";


function Places() {
  return (
    <>
    <div>Vacation</div>
    <h2>{vacationContent.name}</h2>



</>
  )
}
// console.log("my info" + vacationContent)
export default Places;
