const Movie = require('../models/movie')
const crud = require('../helpers/crud.helper')
const { cloudinary } = require('../helpers/cloudinary')

exports.listMovies = async (req,res) =>{
	try{
		const response = await crud.listResources(Movie)
		res.status(200).send(response)
	}catch(err){
		res.status(404).send({message:err})
	}
}

exports.createMovie = async(req,res) =>{
	try{
		console.log(req.body)
		const fileStrs  = req.body.images
		if (fileStrs){
			let uploadedResponse;
		for (const file of fileStrs) {
			uploadedResponse = await cloudinary.uploader.upload(file,{upload_preset:'test'})
			console.log(uploadedResponse)
		}
		}
		
		
		// req.body.images = [uploadedResponse.url]
		const response = await crud.createResource(Movie, req)
		res.status(200).send(response.message)
	}catch(err){
		res.status(404).send(err)
	}
}	

exports.getMovie = async(req,res) =>{
	try{
		const response = await crud.getResource(Movie, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

exports.updateMovie = async(req,res) =>{
	try{
		const response = await crud.updateResource(Movie, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

exports.deleteMovie = async(req,res) =>{
	try{
		const response = await crud.deleteResource(Movie, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}