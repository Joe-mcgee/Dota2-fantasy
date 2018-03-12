const ENV = process.env.ENV || 'development';
const cookieSession = require('cookie-session')
const express = require('express');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const bodyParser = require('body-parser');
const request = require('request')
const strint = require('./strint/strint.js')
const Dota2Api = require('dota2-api');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
const port = process.env.PORT || 5000;

//Resource Routes
const authenticateRoutes = require('./routes/authenticate');
const registerRoutes = require('./routes/register');

app.use('/', authenticateRoutes());
app.use('/', registerRoutes(knex));


app.get('/api/hello', (req, res) => {
  const BigSteam64 = strint.add("76561198075355796", "0")
  const steam64 = '76561198075355796'
  // const da = Dota2Api.create('FF967EC4968D206F9FA1485AC5F6E162', 570)
  // const oprtions = {game_mode: 1};
  //   da.getMatchHistory('3719509349').then((result) => {
  //     console.log(result);
  // }, (errorResponseStatusText) => {
  //     console.log(errorResponseStatusText);
  // });
  request({
    "uri": `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=FF967EC4968D206F9FA1485AC5F6E162&steamids=${BigSteam64}`
  }).pipe(res);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
