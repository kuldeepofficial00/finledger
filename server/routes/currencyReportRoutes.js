const express = require('express');
const router = express.Router();
router.get('/breakdown', require('../controllers/currencyReportController').getBreakdown);
module.exports = router;
