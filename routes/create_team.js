/* eslint-disable */
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
        const teams = [];
        JSONresponse.groups[0].teams.forEach((team) => {
          teams.push(team.id);
        });

        const timePad = createTimePad(1, 10e2);
        let ps = [];
        for (let i = 0; i < teams.length; i++) {
          const read_match = {
            uri: `http://api.sportradar.us/dota2-t1/en/teams/${teams[i]}/profile.json?api_key=${process.env.SPORT_TRADER_KEY}`,
            json: true
          };
    ps.push(timePad().then(() => request(read_match)))
        };
      return Promise.all(ps)
        .then((response) => {
          //res.send(response)
          for (let i = 0; i < response.length; i++) {
            let resObj = response[i];
            for (let j = 0; j < resObj.players.length; j++) {
            const dbPlayerObj = {
              teamApiKey: resObj.team.id,
              teamName: resObj.team.name,
              nickName: resObj.players[j].nickname
            };
            knex.insert(dbPlayerObj).into('players').then((response) => {
              console.log(response)
            })

            }
          }
            res.send(response)

          }).catch(err => console.log(err));
      });
});
    return router;
};

