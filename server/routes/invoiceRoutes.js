const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { create } = require('../controllers/invoiceController');
router.use(auth);
router.post('/', create);
module.exports = router;
