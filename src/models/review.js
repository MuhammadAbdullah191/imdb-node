const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
	review: {
		type: String,
		required: [true, 'Review Cannot be empty']
	},
	media_type: {
		type: String,
		enum: ['Show', 'Movie'],
		required: [true, 'Review must belong to any type of media']
	},
	creator: {
		type: mongoose.Schema.ObjectId,
		ref: 'User'
	},
	media: {
		type: mongoose.Schema.ObjectId,
		refPath: 'media_type'
	},
})

module.exports = mongoose.model('Review', reviewSchema)