const sequelize = require('../config/connection');
const seedGallery = require('./gallery-seed');
const seedPaintings = require('./painting-seed');

const seedAll = async () => {

    await sequelize.sync({ force: true });
    console.log('\n---------------DATABASE SYNCED-------------------------------');

    await seedGallery();
    console.log('\n---------------GALLERY SYNCED-------------------------------');

    await seedPaintings();
    console.log('\n---------------PAINTING SYNCED-------------------------------');

    process.exit(0);
};

seedAll();