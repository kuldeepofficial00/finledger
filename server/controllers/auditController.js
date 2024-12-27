const AuditLog = require('../models/AuditLog');
exports.getLogs = async (req, res) => res.json(await AuditLog.find().limit(50));
