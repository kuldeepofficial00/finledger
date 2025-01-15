import React, { useState } from 'react';
export default () => { const [page, setPage] = useState('dashboard'); return <div>FinLedger {page}</div>; };
