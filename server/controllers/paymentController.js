const Payment = require('../models/Payment');
const Invoice = require('../models/Invoice');
exports.pay = async (req, res) => { const p = await Payment.create(req.body); await Invoice.findByIdAndUpdate(req.body.invoice, { status: 'paid' }); res.status(201).json(p); };
