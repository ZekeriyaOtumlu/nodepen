// ==========
// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;
// Create the noteSchema with the schema object
var noteSchema = new Schema({
  // The headline is the article associate with the note
    title: String, 
  // as is the noteText
    body: String
});
// Create the Note model using the noteSchema
var Note = mongoose.model("Note", noteSchema);
// Export the Note model
module.exports = Note;