const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCelebs: getCelebs,
  getCeleb: getCeleb,
  runSpaceship: runSpaceship,
  getEvents: getEvents,
}

async function runSpaceship(db = connection) {
  await resetOutcomes()
  for (let i = 1; i < 6; i++) {
    await generateCelebEventPair(i)
  }
  return db('outcomes')
    .join('celebs', 'celebs.id', 'outcomes.celeb_id')
    .join('events', 'events.id', 'outcomes.event_id')
    .select('celebs.name as celebName', 'events.description', 'events.outcome')
    .orderByRaw('random()')
}

async function generateCelebEventPair(celebId, db = connection) {
  const maxEvent = await getEventsLength()
  const randomNo = Math.floor(Math.random() * maxEvent) + 1
  return db('outcomes').insert({ celeb_id: celebId, event_id: randomNo })
}

async function getEventsLength(db = connection) {
  const maxId = await db('events').max('id').first()
  return maxId['max(`id`)']
}

function resetOutcomes(db = connection) {
  return db('outcomes').del()
}

function getCelebs(db = connection) {
  return db('celebs').select()
}

function getCeleb(id, db = connection) {
  return db('celebs').where('id', id).first()
}

function getEvents(db = connection) {
  return db('events').select('events.name')
}
