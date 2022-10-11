const mongoose = require('mongoose')

const userScehma = new mongoose.Schema({
	userName:{
		type: String,
		required: [true, 'Username Not Provided']
	},
	email:{
		type: String,
		unique: [true, "Email Already Exists"],
		lowercase: true,
		trim: true, 
		required: [true, "Email is not provided"],
		validate:{
			validator: function(v){
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
			}
		}
	},
	role: {
		type: String,
		enum:['normal', 'admin'],
		required: [true, 'Please Specify user role'],
	},
	password:{
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('User',userScehma)