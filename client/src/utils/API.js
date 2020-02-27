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