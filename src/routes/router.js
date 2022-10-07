const express = require("express");
const router = express.Router();
const swapi = require("./swapi");
const pokemon = require("./pokemon")
const all = require("./all")
router.get("/swapi", swapi);
router.get("/pokemon", pokemon)
router.get("/all", all)
module.exports = router;