const ENV = process.env.ENV || 'development';
const cookieSession = require('cookie-session');
const express = require('express');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const bodyParser = require('body-parser');

const request = require('request-promise');





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
const getPlayerResults = require('./routes/get_results');
const getTodaysMatches = require('./routes/getMatches');
const getMatchesFromDb = require('./routes/getMatchesFromDb');
const demoupdateScore = require('./routes/demoupdateScore');



app.use('/', authenticateRoutes(knex));
app.use('/', registerRoutes(knex));
app.use('/', createTeamRoutes(knex));
app.use('/', getPlayerResults(knex));
app.use('/', getTodaysMatches(knex));
app.use('/', getMatchesFromDb(knex));
app.use('/', demoupdateScore(knex));



app.get('/api/hello', (req, res) => {
 request.get({
      "uri": `http://api.sportradar.us/dota2-t1/en/schedules/2018-03-08/schedule.json?api_key=${process.env.SPORT_TRADER_KEY}`
    }).pipe(res);
  });



app.listen(port, () => console.log(`Listening on port ${port}`));
