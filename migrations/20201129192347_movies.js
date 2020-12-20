exports.up = (knex) => knex.schema.createTable('movies', (table) => {
  table.increments('id').primary();
  table.string('name', 60).notNullable();
  table.string('description', 120).notNullable();
  table.string('gender', 15).notNullable();
  table.string('image');
});

exports.down = (knex) => knex.schema.dropTable('movies');
