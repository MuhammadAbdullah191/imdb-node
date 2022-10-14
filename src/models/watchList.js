const mongoose = require('mongoose')

const watchListSchema = mongoose.Schema({
	media_type: {
		type: String,
		enum: ['Show', 'Movie'],
		required: [true, 'Review must belong to any type of media']
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User'
	},
	media: {
		type: mongoose.Schema.ObjectId,
		refPath: 'media_type'
	},
})

module.exports = mongoose.model('WatchList', watchListSchema)