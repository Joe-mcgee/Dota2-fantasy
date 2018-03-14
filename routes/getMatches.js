/* eslint-disable */
const express = require('express');
const router = express.Router();
const path = require('path');
const request = require('request-promise');
const createTimePad = require('./timePad.js')


function filterMatches(matches, DateCheck) {
  const todaysMatches = [];
  matches.sport_events.forEach((match) => {
    if (DateCheck.test(match.scheduled)) {
      todaysMatches.push(match)
    }
  })
  return todaysMatches
}

module.exports = (knex) => {

  router.get('/todays_matches', (req, res) => {
    const DateCheck = new RegExp('2017-08-03');
    request.get({
      uri: `http://api.sportradar.us/dota2-t1/en/tournaments/sr:tournament:13911/schedule.json?api_key=${process.env.SPORT_TRADER_KEY}`,
      json: true
    })
    .then((matches) => {
    let todaysMatches = filterMatches(matches, DateCheck);
    todaysMatches.forEach((match) => {
      const time = match.scheduled;
      const apiMatchId = match.id;
      knex.insert({teamOne: match.competitors[0].name,
                  teamTwo: match.competitors[1].name,
                  scheduled: time,
                  ApiMatchId: apiMatchId}).into('matches').then(() => {
                    console.log('coolbeans')
                  })
    })
    res.send('coolbeans')
    })


  })

  return router;
}
