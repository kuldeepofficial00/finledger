const mongoose = require('mongoose');
module.exports = mongoose.model('WebhookEvent', new mongoose.Schema({ source: String, payload: Object, processed: Boolean }, { timestamps: true }));
