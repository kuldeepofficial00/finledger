const rates = { USD: 1, EUR: 0.92, GBP: 0.79 };
exports.convert = (amt, from, to) => amt * (rates[to] / rates[from]);
