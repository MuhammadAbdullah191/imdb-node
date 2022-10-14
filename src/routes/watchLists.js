const express = require('express')
const router = express.Router()
const watchListController = require('../controllers/watchList.controller')

router.get('/', watchListController.listWatchLists)
router.post('/', watchListController.createWatchList)
router.get('/:id', watchListController.getWatchList)
router.patch('/:id', watchListController.updateWatchList)
router.delete('/:id', watchListController.deleteWatchList)

module.exports = router