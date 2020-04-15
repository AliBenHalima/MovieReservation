const express = require('express');
const router = express.Router();
const uploadController = require('../Controller/upload');

router.post('/api/Movies', uploadController.upload);
router.get('/api/getMovies', uploadController.getMovies);
router.get('/api/getMoviesByUser', uploadController.getMoviesByUser);
router.delete('/api/deleteMovie/:id', uploadController.deleteMovie);

module.exports = router;
