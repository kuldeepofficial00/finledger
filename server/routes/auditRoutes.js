const express = require('express');
const router = express.Router();
router.get('/', require('../controllers/auditController').getLogs);
module.exports = router;
