exports.seed = function (knex) {
  return knex('celebs').insert([
    { id: 1, name: 'Katy Perry' },
    { id: 2, name: 'Matt Leblanc' },
    { id: 3, name: 'Addison Rae' },
    { id: 4, name: 'Hasbulla Magomedov' },
    { id: 5, name: 'Kangaroo Jack' },
  ])
}
