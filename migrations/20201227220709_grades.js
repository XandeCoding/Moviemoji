exports.up = (knex) => {
  return knex.schema.createTable('grades', (table) => {
    table.increments('id').primary();
    table.string('primaryGrade').notNullable();
    table.string('secondaryGrade').notNullable();

    table.integer('userId')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE')

    table.integer('movieId')
      .references('movies.id')
      .notNullable()
      .onDelete('CASCADE')
  })
};

exports.down = (knex) => { return knex.schema.dropTable('grades') };
