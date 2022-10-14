const mongoose = require('mongoose')

const genreSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Genre Title is Required']
	},
	description: {
		type: String,
		required: [true, 'Genre Description is Required']
	},
})

module.exports = mongoose.model('Genre', genreSchema)