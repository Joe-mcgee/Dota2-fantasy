/*eslint-disable*/
const express = require('express');
const router = express.Router();
const path = require('path');

module.exports = (knex) => {

  router.get('/getMatchesFromDb', (req, res) => {
    const requiredData = [];
    knex.select('*')
      .from('matches').where('scheduled', 'like', '2018-03-22%').then((matches) => {
        Promise.all(matches.map(match => {
          return knex.select('name', 'logo').from('competitors').where('ApiId', match.teamOne).then((first) => {
            match['teamOneName'] = first[0].name;
            match['teamOneLogo'] = first[0].logo;
            return knex.select('name', 'logo').from('competitors').where('ApiId', match.teamTwo).then((second) => {
              match['teamTwoName'] = second[0].name;
              match['teamTwoLogo'] = second[0].logo;
              return match
            })
          });

        })).then((response) => {

        res.send(JSON.stringify(response))

        })
      });

  });

  return router;
};
