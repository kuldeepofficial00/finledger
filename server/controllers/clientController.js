const Client = require('../models/Client');
exports.getClients = async (req, res) => { const clients = await Client.find({ company: req.user.companyId }); res.json(clients); };
exports.createClient = async (req, res) => { const client = await Client.create({ ...req.body, company: req.user.companyId }); res.status(201).json(client); };
