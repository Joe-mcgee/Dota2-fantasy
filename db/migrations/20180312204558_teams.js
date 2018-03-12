

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('teams', function(table) {
      table.increments();
      table.integer('points');
      table.integer('players_id').unsigned();
      table.foreign('players_id').references('id').inTable('players');
      table.integer('users_id').unsigned();
      table.foreign('users_id').references('id').inTable('users');


      })
    ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('teams')
    ]);
};
