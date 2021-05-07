const Gallery = require('../models/Gallery');
const Painting = require('../models/Painting');
const User = require('../models/User');

Gallery.hasMany(Painting, {
    foreignKey: 'gallery_id',
});
Painting.belongsTo(Gallery, {
    foreignKey: 'gallery_id',
});







module.exports = { Gallery, Painting, User };