const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getClients, createClient } = require('../controllers/clientController');
router.use(auth);
router.route('/').get(getClients).post(createClient);
module.exports = router;
