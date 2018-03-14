
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('competitors', function(table) {
      table.increments();
      table.string('ApiId');
      table.string('name');
      table.string('logo');

    })
    ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('competitors')
    ]);
};
