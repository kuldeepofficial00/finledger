const { toCurrency } = require('../utils/decimalMath');
exports.calculateTotals = (items = []) => { let subtotal = 0, tax = 0; items.forEach(i => { subtotal += i.price * i.qty; tax += (i.price * i.qty) * (i.taxRate / 100); }); return { subtotal: toCurrency(subtotal), taxTotal: toCurrency(tax), grandTotal: toCurrency(subtotal + tax) }; };
