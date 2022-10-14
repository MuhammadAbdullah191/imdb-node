const express = require('express')
const router = express.Router()
const genreController = require('../controllers/genre.controller')

router.get('/', genreController.listGenres)
router.post('/', genreController.createGenre)
router.get('/:id', genreController.getGenre)
router.patch('/:id', genreController.updateGenre)
router.delete('/:id', genreController.deleteGenre)

module.exports = router