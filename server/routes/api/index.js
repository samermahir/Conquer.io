const router = require('express').Router();

const userRoutes = require('./userRoutes');
const crmRoutes = require('./crmRoutes');
//const clientRoutes = require('./clientRoutes');

router.use('/users', userRoutes);
router.use('/crm', crmRoutes);
//router.use('/clients', clientRoutes);

module.exports = router;

