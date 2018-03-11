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

  knex.select('email').from('users').then(function(emails) {
    if (emails.length) {
       return next(err);
    } else {

      bcrypt.hash(req.body.password, 9, (err, hash) => {
        if (err) return next(err);
        const newUser = {name: req.body.username, email: req.body.email};
        newUser.password = hash;
        return knex('users').insert(newUser).then(function() {
           res.redirect('http://localhost:3000')
           return
        })
      })
    }
  })

})
  return router
}




