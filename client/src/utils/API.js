import axios from "axios"

export default {


    // Get book from google search 
    weatherSearch: function(query , props) {
        return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + query + "&key=AIzaSyAE2CIuMnHiuUN7XLs9fRiATGN1gD-t0LY")
       },

    placeSearch: function(query) {
        return axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "+point+of+interest&language=en&key=AIzaSyAE2CIuMnHiuUN7XLs9fRiATGN1gD-t0LY")
     },


    



    // Gets all books
    getWeather: function () {
        return axios.get("/api/weather");
    },

    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/weather/" + id);
    },

    // Saves a book to the database
    saveBook: function (savedBooks) {
        return axios.post("/api/weather", savedBooks);
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/weather/" + id);
    }

}