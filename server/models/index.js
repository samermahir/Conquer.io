const CRM = require('./CRM');


CRM.hasMany(CRM, { foreignKey: 'crm_id' });





module.exports = { CRM };