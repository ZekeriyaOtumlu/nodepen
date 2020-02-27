const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sportSchema = new Schema ({
    title: {type: String, required: true},
    authors: [{type: String, required: true}],
    description: String,
    image: {type: String, required:true},
    date: {type: Date, default: Date.now}
});

const Sport = mongoose.model ("Sport", sportSchema);

module.exports = Sport;