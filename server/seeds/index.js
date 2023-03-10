const seedGyms = require('./seeds.js');

const sequelize = require('../config/index');

const seedGym = async () =>{
  await sequelize.sync({ force: true});
  console.log('DB is now synced.');
  await seedGyms();
  console.log('\n ---------- GYMS ARE SEEDED ----------\n');
  process.exit(0);

};

seedGym();