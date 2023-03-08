const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', async (req, res) => {
  // db.getCelebs()
  //   .then((users) => {
  //     res.render('index', { users: users })
  //   })
  //   .catch((err) => {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
  const celebs = await db.getCelebs()
  const events = await db.getEvents()
  res.render('index', { celebs: celebs, events: events })
})

router.get('/outcome', async (req, res) => {
  const outcome = await db.runSpaceship()
  res.render('outcome', { outcome: outcome})
})

module.exports = router
