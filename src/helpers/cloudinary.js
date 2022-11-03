const cloudinary = require('cloudinary')

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key:process.env.CLOUDINARY_API,
	api_secret:process.env.CLOUDINARY_SECRET
})

module.exports = {cloudinary}