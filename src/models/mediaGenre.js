const mongoose = require('mongoose')

const mediaGenreSchema = mongoose.Schema({
	media_type: {
		type: String,
		enum: ['Show', 'Movie'],
		required: [true, 'Review must belong to any type of media']
	},
	media: {
		type: mongoose.Schema.ObjectId,
		refPath: 'media_type'
	},
	genre_id: {
		type: mongoose.Schema.ObjectId,
		ref: 'Genre'
	},
})

module.exports = mongoose.model('MediaGenre', mediaGenreSchema)