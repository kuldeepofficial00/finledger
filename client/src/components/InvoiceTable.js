import React from 'react';
export default ({ invoices = [] }) => <table><thead><tr><th>Invoice #</th><th>Total</th><th>Status</th></tr></thead><tbody>{invoices.map(i => <tr key={i._id}><td>{i.invoiceNumber}</td><td>${i.grandTotal}</td><td>{i.status}</td></tr>)}</tbody></table>;
