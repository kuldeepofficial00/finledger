const mongoose = require('mongoose');
module.exports = mongoose.model('DiscountRule', new mongoose.Schema({ name: String, percentage: Number, daysWithin: Number }));
