const express = require('express')
const router = express.Router()
const mediaCelebrityController = require('../controllers/mediaCelebrity.controller')

router.get('/', mediaCelebrityController.listMediaCelebrity)
router.post('/', mediaCelebrityController.createMediaCelebrity)
router.get('/:id', mediaCelebrityController.getMediaCelebrity)
router.patch('/:id', mediaCelebrityController.updateMediaCelebrity)
router.delete('/:id', mediaCelebrityController.deleteMediaCelebrity)

module.exports = router