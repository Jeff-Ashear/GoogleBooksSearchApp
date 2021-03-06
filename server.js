const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require ("mongoose");

const Book = require("./models/Books");

var MONGODB_URI = "mongodb://heroku_1b5mbwhd:4tadas89mmunku92h6ok4icueo@ds017553.mlab.com:17553/heroku_1b5mbwhd";
// process.env.MONGODB_URI

// "mongodb://heroku_40lj7s5b:f9sd7msbe4vvh0dbbhk78rpprp@ds029466.mlab.com:29466/heroku_40lj7s5b"// "mongodb://localhost:27017/googlebooks"; //process.env.MONGODB_URI ||

//mongoose.connect()



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Serve up static assets (usually on heroku)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }); 

// Define API routes here
app.get("/api/books", function(request, response) {
  Book.find({})
  .then(books => {
    return response.json(books);
  })
  .catch((err) => response.status(404).json(err))
})

app.post('/api/books', function(request, response) {
  Book.create(request.body)
  .then(books => {
    response.json(books);
  })
  .catch(err=> {
    response.status(404).json(err);
  });
});

app.delete("/api/books/:id", function(request, response) {
  console.log("at dele:", request.params.id)
  Book.remove({_id: request.params.id})
  .then(book => response.json(book))
  .catch(err => response.status(404).json(err))
})



// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
