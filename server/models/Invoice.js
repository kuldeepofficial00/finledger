const mongoose = require('mongoose');
const invoiceSchema = new mongoose.Schema({ invoiceNumber: { type: String, unique: true }, company: mongoose.Schema.Types.ObjectId, client: mongoose.Schema.Types.ObjectId, status: { type: String, default: 'draft' }, subtotal: Number, taxTotal: Number, grandTotal: Number, dueDate: Date }, { timestamps: true });
module.exports = mongoose.model('Invoice', invoiceSchema);
