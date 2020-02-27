const routes = require("./routes");
const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 8080;
const app = express();

// Define Middleware here
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// For heroku

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

//Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sports")


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
