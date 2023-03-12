const { CRM } = require('../models');

const crmData = [
    {
      User_Id: 1,
      Business_Name: 'ABC Company',
      Address: '123 Main St',
      Zipcode: '12345',
      Geocodes: '123.456, -123.456',
      Sales_Pipeline_Stage: 'Lead'
    },
    {
      User_Id: 2,
      Business_Name: 'XYZ Corp',
      Address: '456 Elm St',
      Zipcode: '67890',
      Geocodes: '123.456, -123.456',
      Sales_Pipeline_Stage: 'Prospect'
    }
  ];
  
//   sequelize.sync({ force: true })
//     .then(() => {
//       return CRM.bulkCreate(crmData);
//     })
//     .then(() => {
//       console.log('CRM data seeded successfully');
//     })
//     .catch(err => {
//       console.error('Error seeding CRM data', err);
//     });


const seedGyms = () => CRM.bulkCreate(crmData);
module.exports= seedGyms;