const express = require('express');
const router = express.Router();
const Person = require("./../models/Person");


router.post("/person", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("Data Saved!!!");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error: "Internal server error!!!" });
  }
});

router.get("/person/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "manager" || workType == "chef" || workType == "waiter") {
      const person = await Person.find({ work: workType });
      console.log("Data Fetched!!!!");
      res.status(200).json(person);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error: "Internal server error!!!" });
  }
});

module.exports = router;