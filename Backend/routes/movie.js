const express = require("express");
const router = express.Router();
const uploadController = require("../Controller/upload");

router.get("/api/getMovies", uploadController.getMovies);
module.exports = router;
