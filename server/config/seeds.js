const db = require('./connection');
const { User, Power } = require('../models');

db.once('open', async () => {
    await Power.deleteMany();

    const power = await Power.insertMany([
        {
            powerName: 'Electric Blast',
            powerLevel: 2
        },

        {
            powerName: 'Burning Embers',
            powerLevel: 3
        },

        {
            powerName: 'Shodow Form',
            powerLevel: 4
        },

        {
            powerName: 'Piercing Light',
            powerLevel: 3
        }
    ])

    console.log('Powers Seeded!')

    await User.deleteMany();

    await User.create({
        username: 'Alexander Teleck',
        characterName: 'Dawn Elin',
        email: "this@gmail.com",
        password: "1234test"
    });

    await User.create({
        username: 'Randy Marsh',
        characterName: 'accordingtorandy',
        email: "randy@gmail.com",
        password: "1234test"
    })

    console.log('Users Seeded!')

    process.exit();
});