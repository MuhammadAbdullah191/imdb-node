const Show = require('../models/show')
const crud = require('../helpers/crud.helper')
const { cloudinary } = require('../helpers/cloudinary')
const mediaGenre = require('./mediaGnere.controller')
const mediaCelebrity = require('./mediaCelebrity.controller')

exports.listShows = async(req,res) =>{
	try{
		const response = await crud.listResources(Show)
		res.status(200).send(response)
	}catch(err){
		res.status(404).send({message:err})
	}
}

exports.createShow = async(req,res) =>{
	try{
		console.log("req.body.celebrities")
		console.log(req.body.celebrities)
		// res.status(200).send("response.message")

		// return
		if(req.body.images){
			const fileStrs  = req.body.images
			req.body.images=[]
			if (fileStrs){
				let uploadedResponse;
				for (const file of fileStrs) {
					uploadedResponse = await cloudinary.uploader.upload(file,{upload_preset:'test'})
					console.log(uploadedResponse)
					req.body.images.push(uploadedResponse.url)
				}
			}
		}
		
		const response = await crud.createResource(Show, req)
		if(response.data){
			console.log('generating genre')
			const genreResponse = await mediaGenre.createMediaGenres({genres:req.body.genre, "media":response.data.id, "media_type":'Show'})
			console.log(genreResponse)
			const celebrityResponse = await mediaCelebrity.createMediaCelebrities({celebrities:req.body.celebrities, "media":response.data.id, "media_type":'Show'})
			console.log(celebrityResponse)
		}
		
		res.status(200).send(response.message)
	}catch(err){
		res.status(404).send(err)
	}
}	

exports.getShow = async(req,res) => {
	try{
		const medaiGenreData =await mediaGenre.getAllGenre(req,res)
		const response = await crud.getResource(Show, req)
		res.status(200).send({show:response.data,genre:medaiGenreData})
	}catch(err){
		res.status(404).send(err)
	}
}

exports.updateShow = async(req,res) =>{
	try{
		const response = await crud.updateResource(Show, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

exports.deleteShow = async(req,res) =>{
	try{
		const response = await crud.deleteResource(Show, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}