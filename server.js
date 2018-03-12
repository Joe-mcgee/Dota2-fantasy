const ENV = process.env.ENV || 'development';
const cookieSession = require('cookie-session');
const express = require('express');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const bodyParser = require('body-parser');

const request = require('request-promise');
const strint = require('./strint/strint.js');




const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));
const port = process.env.PORT || 5000;

//Resource Routes
const authenticateRoutes = require('./routes/authenticate');
const registerRoutes = require('./routes/register');
const createTeamRoutes = require('./routes/create_team');

app.use('/', authenticateRoutes());
app.use('/', registerRoutes(knex));
app.use('/', createTeamRoutes(knex));


app.get('/api/hello', (req, res) => {
 request.get({
      "uri": `http://api.sportradar.us/dota2-t1/en/schedules/2018-03-08/schedule.json?api_key=${process.env.SPORT_TRADER_KEY}`
    }).pipe(res)
  });







app.listen(port, () => console.log(`Listening on port ${port}`));
