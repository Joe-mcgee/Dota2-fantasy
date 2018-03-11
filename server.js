const ENV = process.env.ENV || 'development';
const express = require('express');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
const port = process.env.PORT || 5000;

//Resource Routes
const authenticateRoutes = require('./routes/authenticate');
const registerRoutes = require('./routes/register');

app.use('/', authenticateRoutes());
app.use('/', registerRoutes(knex));


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});



app.listen(port, () => console.log(`Listening on port ${port}`));
