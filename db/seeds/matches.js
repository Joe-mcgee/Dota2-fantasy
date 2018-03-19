
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      // Inserts seed entries
      return knex('matches').insert([
        {id: 1, teamOne: 'sr:competitor:248711',
                teamTwo: 'sr:competitor:300124',
                scheduled: '2018-03-19T21:00:00+00:00',
                apiMatchId: 'sr:match:12117834',
                teamOneScore: '0',
                teamTwoScore: '0'}
      ]);
    });
};
