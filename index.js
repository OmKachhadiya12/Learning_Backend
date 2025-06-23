const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/Person");
const bodyParser = require("body-parser");
const menuItem = require("./models/menuItem");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Heyyy Man!!!");
});

const personRoute = require('./routes/personRoute');
const menuRoute = require('./routes/menuRoute');
app.use('/',personRoute);
app.use('/',menuRoute);


app.listen(3000, () => {
  console.log("Working Man!!!");
});
