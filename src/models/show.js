const mongoose = require('mongoose')

const showSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Show Title must exist']
	},
	episodes: {
		type: Number,
		required: [true, 'Episodes must exist']
	},
	seasons: {
		type: Number,
		default:1
	},
	release_date: {
		type: Date,
		required: [true, 'Relase Date is required']
	},
	rating:{
		type: Number,
		default: 0
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

module.exports = mongoose.model('Show', showSchema)