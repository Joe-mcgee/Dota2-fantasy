exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('players', function(table) {
      table.increments();
      table.string('nickName');
      table.string('teamApiKey');
      table.string('teamName');



    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('players')
  ]);
};
