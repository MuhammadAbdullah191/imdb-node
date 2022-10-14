const mongoose = require('mongoose')

const celebritySchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Celebrity Name is required']
	},
	age: {
		type: Number,
		required: [true, 'Celebrity Age is required']
	},
	type: {
		type: String,
		required: [true, 'Celebrity type is required']
	}
})

module.exports = mongoose.model('Celebrity', celebritySchema)