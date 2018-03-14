/* eslint-disable */
const express = require('express');
const router = express.Router();
const path = require('path');
const request = require('request-promise');
const timePadPkg = require('./timePad.js')


function filterMatches(matches, DateCheck) {
  const todaysMatches = [];
  matches.sport_events.forEach((match) => {
    if (DateCheck.test(match.scheduled)) {
      todaysMatches.push(match)
    }
  })
  return todaysMatches
}

function pushMatchesToDb(todaysMatches, knex) {
  todaysMatches.forEach((match) => {
      const time = match.scheduled;
      const apiMatchId = match.id;
      knex.insert({teamOne: match.competitors[0].id,
                  teamTwo: match.competitors[1].id,
                  scheduled: time,
                  apiMatchId: apiMatchId}).into('matches').then(() => {
                    console.log('coolbeans')
                  })
    })
}

function playerList(todaysMatches) {
  const competitors = [];
  todaysMatches.forEach((match) => {
      if (!competitors.includes(match.competitors[0].id)) {
        competitors.push(match.competitors[0].id)
      }
      if (!competitors.includes(match.competitors[1].id)) {
        competitors.push(match.competitors[1].id)
      }
  })
  return competitors
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
    const competitors = playerList(todaysMatches);
    const timePad = timePadPkg.createTimePad(1, 10e2);
    console.log(timePad)
    let ps = [];
    for (let i = 0; i < competitors.length; i++) {
          const competitor_profiles = {
            uri: `http://api.sportradar.us/dota2-t1/en/teams/${competitors[i]}/profile.json?api_key=${process.env.SPORT_TRADER_KEY}`,
            json: true
          };
          ps.push(timePad().then(() => request(competitor_profiles)));
        }
      return Promise.all(ps)
        .then((profiles) => {
          profiles.forEach((profile) => {
            knex.insert({ApiId: profile.team.id,
                         name: profile.team.name,
                         logo: profile.logo.url})
            .into('competitors')
            .then(() => {
            })
          })
        pushMatchesToDb(todaysMatches, knex)
        res.send('cool beans')
        })
    })
  })

  return router;
}
