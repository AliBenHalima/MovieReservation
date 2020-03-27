const express = require('express');
const router = express.Router();
const uploadController = require('../Controller/upload');




router.post('/api/Movies', uploadController.upload);
module.exports = router;
