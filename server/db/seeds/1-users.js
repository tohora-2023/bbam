exports.seed = function (knex) {
  return knex('celebs').insert([
    { id: 1, name: 'Katy Perry', images: '/images/katy-perry.jpg' },
    { id: 2, name: 'Matt Leblanc', images:'/images/matt-leblanc.jpg' },
    { id: 3, name: 'Addison Rae', images: '/images/addison-rae.jpg'},
    { id: 4, name: 'Kangaroo Jack', images: '/images/kangaroo-jack.jpg' },
    { id: 5, name: 'Hasbulla Magomedov', images: '/images/hasbulla.jpg' },
  ])
}
