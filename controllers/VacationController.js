const db = require("../models");
const axios = require("axios");

// Defining methods for the VacationContoller
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
    console.log(req)
   axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + req.params.query + "+point+of+interest&language=en&key=AIzaSyAE2CIuMnHiuUN7XLs9fRiATGN1gD-t0LY")
    .then(response => {
  console.log(response)
      res.json(response.data)
    }).catch(err => {
      console.log(err)
    })
  }
};