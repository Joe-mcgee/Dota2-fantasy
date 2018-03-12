
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('tournaments', function(table) {
      table.increments();
      table.date('start_date');
      table.date('end_date');
      table.string('api_id');
    })])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('tournaments')]);
};
