exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments('id').primary();
  table.string('name', 45).notNullable();
  table.string('email', 120).notNullable();
  table.string('username', 12).notNullable();
  table.string('password', 12).notNullable();

  table.integer('userGradeId')
    .references('userGrades.id')
    .onDelete('CASCADE')
});

exports.down = (knex) => knex.schema.dropTable('users');
