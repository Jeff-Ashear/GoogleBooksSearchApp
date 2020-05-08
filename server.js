const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require ("mongoose");

mongoose.connect(process.env.MONGODB_URI)

// create a mongooose model
var personSchema = new mongoose.Schema({
  name: String
});

var Person = mongoose.model('person', personSchema);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.post('/create-person', function(req, res) {
  console.log(req.body.name);

  Person.create({ name: req.body.name }, (error) => {
    if (error) {
      res.end(error);
    } else {
      res.end('person created in database.');
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
