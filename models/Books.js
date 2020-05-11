// create a mongooose model
const mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
    title: String,
    authors: String,
    description: String,
    link: String,
    image: String
  });
  
  var Book = mongoose.model('Book', BookSchema);

  module.exports = Book; 