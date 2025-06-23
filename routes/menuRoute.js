const express = require('express');
const router = express.Router();
const menuItem = require("./../models/menuItem");

router.post("/menu", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new menuItem(data);

    const response = await newMenu.save();
    console.log("Data Saved!!!");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error: "Internal server error!!!" });
  }
});

module.exports = router;