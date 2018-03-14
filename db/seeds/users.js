
exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
    knex('teams').del()
  }).then(() => {

  return Promise.all([
    knex('users').insert({
      name: 'Taylor',
      email: 'thulsmans.2994@me.com',
      password: 'topsecret'
    }),
    knex('users').insert({
      name: 'Joe',
      email: 'joe.2994@me.com',
      password: 'topsecret'
    }),
    knex('users').insert({
      name: 'Bob',
      email: 'Bob.2994@me.com',
      password: 'topsecret'
    })
  ]);
  })
};
