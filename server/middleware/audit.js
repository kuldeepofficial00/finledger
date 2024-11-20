const AuditLog = require('../models/AuditLog');
module.exports = (action) => (req, res, next) => { AuditLog.create({ user: req.user?.id, action, details: { path: req.path } }); next(); };
