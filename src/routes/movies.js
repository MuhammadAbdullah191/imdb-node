const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movies.controller')

router.get('/', movieController.listMovies)
router.post('/', movieController.createMovie)
router.get('/:id', movieController.getMovie)
router.patch('/:id', movieController.updateMovie)
router.delete('/:id', movieController.deleteMovie)

module.exports = router