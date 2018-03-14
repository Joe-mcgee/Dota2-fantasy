exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('matches', function(table) {
      table.increments();
      table.string('teamOne');
      table.string('teamTwo');
      table.string('scheduled');
      table.string('apiMatchId');
      table.string('teamOneScore');
      table.string('teamTwoScore');



    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('matches')
  ]);
};
