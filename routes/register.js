  const express = require('express');
  const router = express.Router();
  const passport = require('passport');
  const path = require('path');
  const bcrypt = require('bcrypt');
  const bodyParser = require("body-parser")
  const app = express();

  app.use(bodyParser.urlencoded({extended: true}));
  console.log('im linking this file at least')

  module.exports = (knex) => {
    console.log('and here too')
/*  router.get('/', function(req, res, next){
     res.sendFile('/');
  });*/

  router.post('/register', function(req,res, next) {
    console.log('HELLO')
    knex.select('email').from('users').then(function(emails) {
      if (emails.length) {
         return next(err);
      } else {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) return next(err);
          newUser = {name: req.body.name, email: req.body.email};
          newUser.password = hash;
          return knex('users').insert(newUser).then(function() {
             res.redirect('/')
             return
          })
        })
      }
    })

  })
    return router
}




