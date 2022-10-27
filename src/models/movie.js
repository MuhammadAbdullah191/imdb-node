const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
	title:{
		type: String,
		required: [true, 'Movie Title is required']
	},
	release_date: {
		type: Date,
		required: [true, 'Relase Date is required']
	},
	duration: {
		type: Number,
		required: [true, 'Duration is required']
	},
	rating:{
		type: Number
	},
	description:{
		type: String,
		required: [true, 'Movie Description is required']
	},
	rated_by:{
		type: Number,
		default: 0
	},
	images:{
		type: [],
		default: 0
	},
})

module.exports = mongoose.model('Movie', movieSchema)