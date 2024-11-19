const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { pay } = require('../controllers/paymentController');
router.use(auth);
router.post('/', pay);
module.exports = router;
