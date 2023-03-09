exports.up = (knex) => {
  return knex.schema.createTable('celebs', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('skill')
    table.integer('rating')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('celebs')
}
