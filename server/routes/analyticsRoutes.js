const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getSummary } = require('../controllers/analyticsController');
router.use(auth);
router.get('/summary', getSummary);
module.exports = router;
