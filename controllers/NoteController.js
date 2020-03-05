const db = require("../models");

module.exports = {
    find: function(req, res) {
        db.Note.find({ _vacationId: req.params.id }).then(function(dbNote) {
          res.json(dbNote);
        });
      },
    create: function(req, res) {
        db.Note.create(req.body)
    .then(function(dbNote) {
      // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Vacation.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    })
    .then(function(dbArticle) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
      },
      update: function(req, res) {
        db.Note.create(req.body).then(function(dbNote) {
          res.json(dbNote);
        });
      },
  };
