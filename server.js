const ENV = process.env.ENV || 'development';
const express = require('express');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const cors = require('cors');
const request = require('request');

const app = express();
const port = process.env.PORT || 5000;

//Resource Routes
const authenticateRoutes = require('./routes/authenticate');
const registerRoutes = require('./routes/register');

app.use('/', authenticateRoutes());
app.use('/', registerRoutes(knex));

app.use(cors());
app.get('/api/hello', (req, res) => {
  request('https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=3719509349&key=FF967EC4968D206F9FA1485AC5F6E162'),function(error,response,body ){
    let info = JSON.parse(body)
    console.log(body);
    res.send(info);
  }
  // res.send({ express: 'Hello From Express' });
});



app.listen(port, () => console.log(`Listening on port ${port}`));
