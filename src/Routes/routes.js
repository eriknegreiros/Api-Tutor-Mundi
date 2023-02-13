const express = require("express");
const routes = express.Router();

let dataBase = [];

routes.get("/", (req, res) => {
  return res.json(dataBase);
});

routes.post("/add", (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).end();
  }

  dataBase.push(body);
  return res.status(201).json(body);
});

module.exports = routes;
