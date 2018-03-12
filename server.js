const ENV = process.env.ENV || 'development';
const cookieSession = require('cookie-session');
const express = require('express');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const bodyParser = require('body-parser');

const request = require('request-promise');
const strint = require('./strint/strint.js');
const Dota2Api = require('dota2-api');
const da = Dota2Api.create('FF967EC4968D206F9FA1485AC5F6E162');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
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

  // const da = Dota2Api.create('FF967EC4968D206F9FA1485AC5F6E162', 570)
  // const oprtions = {game_mode: 1};
  //   da.getMatchHistory('3719509349').then((result) => {
  //     console.log(result);
  // }, (errorResponseStatusText) => {
  //     console.log(errorResponseStatusText);
  // });

  //let BigSteam64;
  request.get({
    "uri": `https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=3719509349&key=FF967EC4968D206F9FA1485AC5F6E162`
  }).then((response) => {
/*    console.log(1, response)
    console.log('two', response.result)
    console.log('three', response.result.players)
    console.log('four', response.result.players[0])
    console.log('five', response.result.players[0].account_id)*/
    const data = JSON.parse(response)
    const steam32 = String(data.result.players[0].account_id);
    console.log(steam32)
    let BigSteam64 = String(strint.add("76561197960265728", '115090068'));
    console.log(BigSteam64);
    return request.get({
       "uri": `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=FF967EC4968D206F9FA1485AC5F6E162&steamids=${BigSteam64}`
     }).pipe(res)
  });

});





app.listen(port, () => console.log(`Listening on port ${port}`));
