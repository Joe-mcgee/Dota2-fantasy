const express = require('express');
const router = express.Router();
const path = require('path');
const request = require('request-promise');

function createTimePad(series = 10, timeout = 1000) {
  let seriesCounter = 0;
  let delay = 0;

  return () => {
    return new Promise((resolve) => {
      if (--seriesCounter <= 0) {
        delay += timeout;
        seriesCounter = series;
      }

      setTimeout(resolve, delay);
    });
  };
}


module.exports = (knex) => {

  router.get('/getresults', (req, res) => {
    request.get({
      uri: `http://api.sportradar.us/dota2-t1/en/tournaments/sr:tournament:13911/schedule.json?api_key=${process.env.SPORT_TRADER_KEY}`
    })
      .then((response) => {
        const matches = [];
        const JSONresponse = JSON.parse(response);
        const DateCheck = new RegExp('2017-08-03');
        JSONresponse['sport_events'].forEach((event) => {
          if (event.tournament_round.group === 'A' && DateCheck.test(event.scheduled)) {
            matches.push(event.id)
          }
        });

        const timePad = createTimePad(1, 10e2);
        let ps = [];
        for (let i = 0; i < matches.length; i++) {
          const match_details = {
            uri: `http://api.sportradar.us/dota2-t1/en/matches/${matches[i]}/summary.json?api_key=${process.env.SPORT_TRADER_KEY}`,
            json: true
          };
          ps.push(timePad().then(() => request(match_details)));
        }
        return Promise.all(ps)
          .then((response) => {
            res.send(response);
          });


      });

  });

  return router;
};
