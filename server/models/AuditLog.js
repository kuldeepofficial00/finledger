const mongoose = require('mongoose');
const auditSchema = new mongoose.Schema({ user: mongoose.Schema.Types.ObjectId, action: String, details: Object }, { timestamps: true });
module.exports = mongoose.model('AuditLog', auditSchema);
