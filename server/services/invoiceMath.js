const { toCurrency } = require('../utils/decimalMath');
const taxMatrix = require('./taxMatrix');
exports.calculateTotals = (items = [], country = 'US') => { const defaultRate = (taxMatrix[country] || 0) * 100; let sub = 0, tax = 0; items.forEach(i => { sub += i.price * i.qty; tax += (i.price * i.qty) * ((i.taxRate || defaultRate) / 100); }); return { subtotal: toCurrency(sub), taxTotal: toCurrency(tax), grandTotal: toCurrency(sub + tax) }; };
