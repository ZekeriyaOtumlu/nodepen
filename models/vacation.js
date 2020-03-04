const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VacationSchema = new Schema ({
    name: {type: String, required: true},
    // image: {type: String, required:true},
    // vacation: {type: String, required:true}
});

const Vacation = mongoose.model ("Vacation", VacationSchema);

module.exports = Vacation;