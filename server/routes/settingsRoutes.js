const express = require('express');
const router = express.Router();
router.put('/', require('../controllers/settingsController').update);
module.exports = router;
