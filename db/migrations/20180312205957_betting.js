exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('bettings', function(table) {
      table.increments();
      table.date('date');
      table.integer('teams').unsigned();
      table.foreign('teams').references('id').inTable('teams');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('bettings')
  ]);
};
