const express = require('express');
const router = express.Router();
const booker = require('../Controller/booking');

router.post('/api/saveChanges',booker.saveChanges);
router.get('/api/getBookings',booker.getBookings)

module.exports = router;
