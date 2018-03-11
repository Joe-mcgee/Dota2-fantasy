
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('teams', function(table) {
      table.increments();
      table.integer('points');
      table.string('support');
      table.string('adc');
      table.string('jungle');
      table.string('mid');
      table.string('top');
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
