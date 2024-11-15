const Invoice = require('../models/Invoice');
const { calculateTotals } = require('../services/invoiceMath');
exports.create = async (req, res) => { const totals = calculateTotals(req.body.items || []); const inv = await Invoice.create({ ...req.body, ...totals, company: req.user.companyId }); res.status(201).json(inv); };
