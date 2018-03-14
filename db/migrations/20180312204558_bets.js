

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('teams', function(table) {
      table.increments();
      table.integer('tokens');
      table.integer('matches_id').unsigned();
      table.foreign('matches_id').references('id').inTable('matches');
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
