const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VacationSchema = new Schema ({
    title: {type: String, required: true},
    authors: [{type: String, required: true}],
    description: String,
    image: {type: String, required:true},
    date: {type: Date, default: Date.now}
});

const Vacation = mongoose.model ("Vacation", VacationSchema);

module.exports = Vacation;