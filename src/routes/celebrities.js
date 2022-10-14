const express = require('express')
const router = express.Router()
const celebrityController = require('../controllers/celebrity.controller')

router.get('/', celebrityController.listCelebrities)
router.post('/', celebrityController.createCelebrity)
router.get('/:id', celebrityController.getCelebrity)
router.patch('/:id', celebrityController.updateCelebrity)
router.delete('/:id', celebrityController.deleteCelebrity)

module.exports = router