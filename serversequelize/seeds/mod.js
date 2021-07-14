const Mods = require('../models/mods');
const sequelize = require('../config/connection');

const moddata = [
  {
    user: 'Pachinko',
    character_name: 'Clamal Elin',
    access_level: 10
  },
  {
    user: 'Letto',
    character_name: 'Boris',
    access_level: 3
  },
  {
    user: 'Gam',
    character_name: 'Little Mini',
    access_level: 5
  },
  {
    user: 'ForToral',
    character_name: 'Leo of Exilia',
    access_level: 8
  }
];

sequelize
  .sync({ force: true })
  .then(() => {
    return Mods.bulkCreate(moddata);
  })
  .then(dbmoddata => {
    console.log('Mods seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });