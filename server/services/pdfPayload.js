exports.format = (invoice) => ({ title: `Invoice ${invoice.invoiceNumber}`, total: invoice.grandTotal });
