const mongoose = require('mongoose');
const connectDB = async () => mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/finledger');
module.exports = connectDB;
