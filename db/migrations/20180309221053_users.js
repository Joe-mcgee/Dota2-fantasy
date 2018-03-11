
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments();
      table.string('name').notNullable();
      table.string('email').unique();
      table.string('password')

      })
    ]);
};

exports.down = function(knex, Promise) {

  return Promise.all([
    knex.schema.dropTable('users')
    ]);
  };
