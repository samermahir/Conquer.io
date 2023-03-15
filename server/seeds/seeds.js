
const { CRM } = require('../models');

const crmData = 
    [
      {
        Name: 'Item A',
        StageNumber: 1,
        StageName: 'Stage 1',
        Address: '123 Main St',
        Zip: '12345',
        City: 'Anytown',
        State: 'CA',
        Latitude: 37.7749,
        Longitude: -122.4194
      },
      {
        Name: 'Item B',
        StageNumber: 2,
        StageName: 'Stage 2',
        Address: '456 Maple Ave',
        Zip: '67890',
        City: 'Otherville',
        State: 'NY',
        Latitude: 40.7128,
        Longitude: -74.0060
      },
      // Add more items here...
    ];
  


 const seedGyms = async () => await CRM.bulkCreate(crmData);
module.exports= seedGyms;