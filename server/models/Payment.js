const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({ invoice: mongoose.Schema.Types.ObjectId, amount: Number, method: String, reference: String }, { timestamps: true });
module.exports = mongoose.model('Payment', paymentSchema);
