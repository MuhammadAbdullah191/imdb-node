const express = require('express')
const router = express.Router()
const mediaGenreController = require('../controllers/mediaGnere.controller')

router.get('/', mediaGenreController.listMediaGenre)
router.post('/', mediaGenreController.createMediaGenre)
router.get('/:id', mediaGenreController.getMediaGenre)
router.patch('/:id', mediaGenreController.updateMediaGenre)
router.delete('/:id', mediaGenreController.deleteMediaGenre)

module.exports = router