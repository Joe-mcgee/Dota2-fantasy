const express = require('express');
const router = express.Router();
const path = require('path');
const request = require('request-promise');


module.exports = (knex) => {

  router.get('/updateScore', (req, res) => {
    knex('matches').where('apiMatchId', 'sr:match:12117834')
      .update({
        teamOneScore: 1,
        teamTwoScore: 0
      }).then((count) => {
        console.log(count)
        res.redirect('http://localhost:3000')
        return
      });

  });
  return router;
}
