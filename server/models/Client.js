const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({ company: mongoose.Schema.Types.ObjectId, name: String, email: String, paymentTerms: { type: Number, default: 30 } }, { timestamps: true });
module.exports = mongoose.model('Client', clientSchema);
