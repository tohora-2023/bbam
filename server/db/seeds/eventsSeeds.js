/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {
      id: 1,
      name: 'Fire',
      outcome: 'injured.',
      description: ' has been burned by a big fire on the ship',
    },
    {
      id: 2,
      name: 'Big Red Button',
      outcome: 'killed!',
      description:
        ' hit a mysterious big red button on a console, which evaporated them instantly',
    },
    {
      id: 3,
      name: 'Hiding',
      outcome: 'injured.',
      description:
        ' hidden from the aliens, but they got bad cramps from their tiny hiding spot',
    },
    {
      id: 4,
      name: 'Explosion',
      outcome: 'killed!',
      description: ' been hit by a giant explosion out of nowhere! BBAM!!!!',
    },
    {
      id: 5,
      name: 'Escape',
      outcome: 'out of the spaceship, hooray!',
      description:
        ' managed to hop into the tractor beam and float down to Earth',
    },
  ])
}
