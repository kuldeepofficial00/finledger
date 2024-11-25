const { getAgingBucket } = require('../utils/agingCalculator');
exports.classify = (invoices) => invoices.map(inv => ({ ...inv, aging: getAgingBucket(inv.dueDate) }));
