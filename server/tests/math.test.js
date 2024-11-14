const { calculateTotals } = require('../services/invoiceMath');
console.log('Math sanity test:', calculateTotals([{ price: 49.99, qty: 2, taxRate: 8.25 }]));
