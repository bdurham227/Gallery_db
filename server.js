//require dependencies
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');

//Port and express
const app = express();
const PORT = process.env.PORT || 3004;


const sess = {
    secret: 'secret',
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

const hbs = exphbs.create({})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


//middleware & body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening, we are running on port ${PORT}`)
    });
});