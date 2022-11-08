const mongoose = require('mongoose')

const mediaCelebritySchema = mongoose.Schema({
	media_type: {
		type: String,
		enum: ['Show', 'Movie'],
		required: [true, 'Review must belong to any type of media']
	},
	media: {
		type: mongoose.Schema.ObjectId,
		refPath: 'media_type'
	},
	celebrity_id: {
		type: mongoose.Schema.ObjectId,
		ref: 'Celebrity'
	},
	role_name:{
		type: String,
		required: [true, 'Role name must exist']
	},
	role_type:{
		type: String,
		required: [true, 'Role type must exist']
	}
})

module.exports = mongoose.model('MediaCelebrity', mediaCelebritySchema)