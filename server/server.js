const express = require('express');
const app = express();
app.use(require('./middleware/securityHeaders'));
module.exports = app;
