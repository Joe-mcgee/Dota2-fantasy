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




  router.get('/getplayers', (req, res) => {
    request.get({
      'uri': `http://api.sportradar.us/dota2-t1/en/tournaments/sr:tournament:13911/info.json?api_key=${process.env.SPORT_TRADER_KEY}`
    })
      .then((response) => {
        const JSONresponse = JSON.parse(response)
        const teamId = JSONresponse.groups[0].teams[4].id;
        const timePad = createTimePad(5, 10e2);

        return timePad().then( () => {
          request.get({
            'uri': `http://api.sportradar.us/dota2-t1/en/teams/${teamId}/profile.json?api_key=${process.env.SPORT_TRADER_KEY}`
          }).pipe(res);
        });
      });


  });

  return router;
};
