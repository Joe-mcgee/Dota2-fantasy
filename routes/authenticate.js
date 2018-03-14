const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt');
function generateRandomString() {
  // https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
  return Math.random().toString(36).slice(7);
}


module.exports = (knex) => {

  router.get('/user', function(req, res, next) {
    res.send({ express: 'Hello From Express' });
  });


  router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(password)
    if (!email || !password) res.redirect('/');

    knex.select('*').from('users').where('email', email).then((dbres) => {
      if (!dbres) redirect('/');
      console.log(dbres[0].password)

      if (bcrypt.compareSync(req.body.password, dbres[0].password, function(err, bcryptres) {
        if(err) {
          console.log('comparison err: ', err)
        }
      })) {
        req.session.user_id = generateRandomString();
        res.redirect('http://localhost:3000');
        return;
      }
    });
    });

  router.post('/logout', (req, res) => {
    req.session = null;
    res.redirect('http://localhost:3000');
  });
  return router;
};
