const express = require('express')
const router = express.Router();
const reviewController = require('../controllers/reviews.controller')

router.get('/', reviewController.listReviews)
router.post('/', reviewController.createReview)
router.get('/getAllReviews', reviewController.getAllReviews)
router.get('/getReview', reviewController.getSpecificReview)
router.get('/:id', reviewController.getReview)
router.patch('/:id', reviewController.updateReview)
router.delete('/:id', reviewController.deleteReview)

module.exports = router