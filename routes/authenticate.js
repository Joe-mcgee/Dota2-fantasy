 const express = require('express');
 const router = express.Router();
 const passport = require('passport');
 const path = require('path');

 module.exports = () => {

  router.get('/user', function(req, res, next) {
      res.send({ express: 'Hello From Express' });
  });

  router.post('/',
     passport.authenticate('local', {
         successRedirect: '/users',
         failureRedirect: '/'
     })
  );
  return router
 }
