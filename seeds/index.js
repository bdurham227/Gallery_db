const sequelize = require('../config/connection');

const seedGallery = require('./gallery-seed');
const seedPainting = require('./gallery-seed');

const seedAll = async () => {

    await sequelize.sync({ force: true });
    console.log('\n---------------DATABASE SYNCED-------------------------------');

    await seedGallery();
    console.log('\n---------------GALLERY SYNCED-------------------------------');

    await seedPainting();
    console.log('\n---------------PAINTING SYNCED-------------------------------');

    process.exit(0);
};

seedAll();