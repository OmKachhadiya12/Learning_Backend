const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/Person");
const bodyParser = require("body-parser");
const menuItem = require("./models/menuItem");
require('dotenv').config();
const passport = require('./auth');

app.use(bodyParser.json());

const logTime = (req,res,next) => {
  console.log(`${new Date().toLocaleString()}`);
  next();
}

app.use(logTime);


app.use(passport.initialize());


app.get("/", (req, res) => {
  res.send("Heyyy Man!!!");
});

const personRoute = require('./routes/personRoute');
const menuRoute = require('./routes/menuRoute');
app.use('/', passport.authenticate('local',{session:false}) ,personRoute);
app.use('/',menuRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Working Man!!!");
});
