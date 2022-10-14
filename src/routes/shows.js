const express = require('express')
const router = express.Router()
const showController = require('../controllers/shows.controller')

router.get('/', showController.listShows)
router.post('/', showController.createShow)
router.get('/:id', showController.getShow)
router.patch('/:id', showController.updateShow)
router.delete('/:id', showController.deleteShow)

module.exports = router