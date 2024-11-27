const mongoose = require('mongoose');
const invoiceSchema = new mongoose.Schema({ invoiceNumber: { type: String, unique: true }, company: mongoose.Schema.Types.ObjectId, client: mongoose.Schema.Types.ObjectId, status: { type: String, default: 'draft' }, subtotal: Number, taxTotal: Number, grandTotal: Number, dueDate: Date }, { timestamps: true });
invoiceSchema.index({ company: 1, status: 1, dueDate: 1 });
module.exports = mongoose.model('Invoice', invoiceSchema);
