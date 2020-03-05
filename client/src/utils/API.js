import axios from "axios"

export default {


    // Get vacation from google search 
    VacationSearch: function(query) {
        return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + query + "&key=AIzaSyAE2CIuMnHiuUN7XLs9fRiATGN1gD-t0LY")
       },

    placeSearch: function(query) {
      return axios.get("/api/Vacation/placeSearch/" + query)
     },

    // Gets all vacations
    // getWeather: function () {
    //     return axios.get("/api/weather");
    // },

    // Gets the vacation with the given id
    getVacation: function () {
        return axios.get("/api/Vacation/");
    },

    // Saves a vacation to the database
    saveVacation: function (savedVacations) {
        return axios.post("/api/Vacation", savedVacations);
    },

    haveVisit: function(id, value) {
        return axios.put("/api/Vacation/" + id, value);  
    },

    // Deletes the vacation with the given id
    deleteVacation: function (id) {
        return axios.delete("/api/Vacation/" + id);
    }

}