const mongoose = require('mongoose');
module.exports = mongoose.model('CompanySettings', new mongoose.Schema({ company: mongoose.Schema.Types.ObjectId, logoUrl: String, primaryColor: String }));
