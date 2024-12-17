const express = require('express');
const app = express();
app.use(express.json());
app.use('/api/v1/webhooks', require('./routes/webhookRoutes'));
module.exports = app;
