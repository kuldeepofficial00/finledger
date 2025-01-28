module.exports = (req, res, next) => { req.id = Date.now().toString(36); next(); };
