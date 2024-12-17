const express = require('express');
const router = express.Router();
router.post('/stripe', require('../controllers/webhookController').handle);
module.exports = router;
