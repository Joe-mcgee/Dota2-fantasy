const express = require('express');
const app = express();
const passport = require('passport');
const path = require('path');
const bcrypt = require('bcrypt');
const router = express.Router();


module.exports = (knex) => {

/*  router.get('/', function(req, res, next){
   res.sendFile('/');
});*/

router.post('/register', (req, res, next) => {
  console.log(req.body)
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




