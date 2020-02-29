import axios from "axios"

export default {
    // Get book from google search 
    weatherSearch: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // Gets all books
    getWeather: function () {
        return axios.get("/api/weather");
    },

    // Gets the book with the given id
    getWeather: function (id) {
        return axios.get("/api/weather/" + id);
    },

    // Saves a book to the database
    saveVacation: function (savedVacations) {
        return axios.post("/api/weather", savedVacations);
    },

    // Deletes the book with the given id
    deleteVacation: function (id) {
        return axios.delete("/api/weather/" + id);
    }

}