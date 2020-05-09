const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://heroku_40lj7s5b:f9sd7msbe4vvh0dbbhk78rpprp@ds029466.mlab.com:29466/heroku_40lj7s5b")

// create a mongooose model
var bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  image: String
});

var Book = mongoose.model('Book', bookSchema);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.post('/save-book', function(request, response) {
  console.log(request.body.title);
  console.log(request.body.author);
  console.log(request.body.description);
  console.log(request.body.image);

  Book.create({ 
    title: request.body.title,
    author: request.body.author,
    description: request.body.description,
    image: request.body.image
  }, (error) => {
    if (error) {
      response.end(error);
    } else {
      response.end('Book created in database.');
    }
  });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
