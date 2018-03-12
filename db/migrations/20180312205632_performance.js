
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('performances', function(table) {
      table.increments();
      table.integer('players_id').unsigned();
      table.foreign('players_id').references('id').inTable('players');
      table.integer('tournaments_id').unsigned();
      table.foreign('tournaments_id').references('id').inTable('tournaments');
      table.string('api_match_id');
    })]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('performances')]);
};
