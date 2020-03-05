const mongoose = require("mongoose");

const db = require("../models");

// This file empties the Vacations collection and inserts the Vacations below
mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/Vacations"
);

const bestVacation = [{

    name: "New York NY",
    image: "https://cdn.vox-cdn.com/thumbor/YQVObtsv5vFSxMWPZOxyzPnT3ZE=/0x0:2000x1333/1200x900/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/58405263/171109_08_17_25_5DSR4719.0.jpg",
    weather: "Sunny"
}]

db.Vacation
   .remove({})
   .then(() => db.Vacation.collection.insertMany(bestVacation))
   .then(data => {
       console.log(data.result.n + "inserted your records");
       process.exit(0);
   })
   .catch(err => {
       console.error(err);
       process.exit(1);
   })