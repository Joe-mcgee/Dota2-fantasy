exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('players', function(table) {
      table.increments();
      table.string('name');
      table.string('pro_team_id');


    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('players')
  ]);
};
