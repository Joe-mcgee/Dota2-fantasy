const express = require('express');
const app = express();
const passport = require('passport');
const path = require('path');
const bcrypt = require('bcrypt');
const router = express.Router();

function generateRandomString() {
  // https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
  return Math.random().toString(36).slice(7);
}


module.exports = (knex) => {

  /*  router.get('/', function(req, res, next){
     res.sendFile('/');
  });*/

  router.post('/register', (req, res) => {
    const randomId = generateRandomString();
    knex.select('email').from('users').where('email', req.body.email).then(function(emails) {
      if (emails.length) {
        res.send('email already in use!');
        return
      } else {

        bcrypt.hash(req.body.password, 9, (err, hash) => {
          if (err) return err;
          const newUser = { name: req.body.username, email: req.body.email };
          newUser.password = hash;
          return knex('users').insert(newUser).then(function() {
            req.session.user_id = randomId;
            res.redirect('http://localhost:3000')
            return
          })
        })
      }
    })

  })
  return router
}
