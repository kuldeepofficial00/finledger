const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({ name: { type: String, required: true }, taxId: String, currency: { type: String, default: 'USD' } }, { timestamps: true });
module.exports = mongoose.model('Company', companySchema);
