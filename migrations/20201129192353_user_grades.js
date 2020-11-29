exports.up = (knex) => knex.schema.createTable('userGrades', (table) => {
  table.increments('id').primary();
  table.string('grade').notNullable();

  table.integer('userId')
    .references('users.id')
    .notNullable()
    .onDelete('CASCADE')

  table.integer('movieId')
    .references('movies.id')
    .notNullable()
    .onDelete('CASCADE')
});

exports.down = (knex) => knex.schema.dropTable('userGrades');
