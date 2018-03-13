const express = require('express');
const router = express.Router();
const path = require('path');

function generateRandomString() {
  // https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
  return Math.random().toString(36).slice(7);
}


module.exports = () => {

  router.get('/user', function(req, res, next) {
    res.send({ express: 'Hello From Express' });
  });


  router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) res.redirect('/');

    knex.select('*').from('users').where('email', email).then((res) => {
      if (!res) redirect('/');

      if (bcrypt.compareSync(req.body.password, res.password)) {
        req.session.user_id = generateRandomString();
        res.redirect('http://localhost:3000');
        return;
      }
    });


    });
  return router;
};
