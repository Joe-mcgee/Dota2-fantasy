 const express = require('express');
 const router = express.Router();
 const passport = require('passport');
 const path = require('path');

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

      console.log(res)
    });


    });
  return router;
};
