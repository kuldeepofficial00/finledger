const Invoice = require('../models/Invoice');
exports.getSummary = async (req, res) => { const invs = await Invoice.find({ company: req.user.companyId }); res.json({ total: invs.length }); };
