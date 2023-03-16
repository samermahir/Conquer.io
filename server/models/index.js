const User = require('./User');
const CRM = require('./CRM');


// User.hasMany(CRM, { foreignKey: 'user_id' });
// CRM.belongsTo(User, { foreignKey: 'user_id' });




// CRM.hasMany(CRM, { foreignKey: 'crm_id' });





module.exports = { 
    CRM,
    User
}; 