import React from 'react';
import EmptyState from './EmptyState';
export default ({ invoices = [] }) => invoices.length === 0 ? <EmptyState /> : <table>...</table>;
