const router = require('express').Router();

const crmRoutes = require('./api/crmRoutes');
// const apiRoutes = require('./api');
// Set up routes here

router.use('/api', crmRoutes);

module.exports = router;
