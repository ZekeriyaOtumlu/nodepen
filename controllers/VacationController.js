const db = require("../models");
const axios = require("axios");
const placeBaseURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
const placeEndURL = "+point+of+interest&language=en";
const APIKEY = "&key=AIzaSyAE2CIuMnHiuUN7XLs9fRiATGN1gD-t0LY";
let photoREF = "";
const photoBaseURL = "https://maps.googleapis.com/maps/api/place/photo?maxheight=210&photoreference=";



// PHOTO URL
// https://maps.googleapis.com/maps/api/place/photo?maxheight=210&photoreference=CmRaAAAAH4yEUBc1g673ywAK10QI-bujxZ4UWdXEFydmpKDZfC6NCSHN_nBGyFv9Do3VuVA0mPCwwHG13ow4m0zLLsIgEc90Pbe_Q7C1reEmhgFEn0gOEYewaxxwseWcM-lmvGZJEhDfKk5uTvdTsrgphZgTznFvGhQPIeGa3eQ-9PTsSzQxC4Osvsx5Nw&key=AIzaSyAE2CIuMnHiuUN7XLs9fRiATGN1gD-t0LY

// PLACE URL
// https://maps.googleapis.com/maps/api/place/textsearch/json?query=Bronx+point+of+interest&language=en&key=AIzaSyAE2CIuMnHiuUN7XLs9fRiATGN1gD-t0LY

// state = {
//   search: "",
//   vacations: [],
//   error: "",
//   message: "",
//   lat: "25.7616798",
//   lng:  "-80.1917902",
//   src: ''
  
// };






// Defining methods for the VacationController
module.exports = {
  findAll: function(req, res) {
    db.Vacation
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Vacation
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Vacation
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Vacation
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Vacation
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  placeSearch: function(req, res) {
    console.log("search")
   axios.get(`${placeBaseURL}${req.params.search}${placeEndURL}${APIKEY}`)
    .then(response => {
  console.log(response.data.results.map(res => (res.name + res.formatted_address + res.photos[0].photo_reference)))
//  console.log(res.json(response.data.results[0]))
  photoREF = response.data.results[0].photos[0].photo_reference
 console.log(photoBaseURL + photoREF + APIKEY)
      }).catch(err => {
      console.log(err)
    })
  },
  photoSearch: function(req, res) {
    console.log("req")
   axios.get(`${photoBaseURL}${photoREF}${placeEndURL}${APIKEY}`)
    .then(response => {
  console.log(response.data.results.map(res => (res.name + res.formatted_address + res.photos[0].photo_reference)))
    }).catch(err => {
      console.log(err)
    })
  }
  };
