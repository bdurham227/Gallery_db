const express = require('express');
const path = require('path');

const sequelize = require('./config/connection');

//Port and express
const app = express();
const PORT = process.env.PORT || 3004;


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening, we are running on port ${PORT}`)
    });
});