const Show = require('../models/show')
const crud = require('../helpers/crud.helper')
const { cloudinary } = require('../helpers/cloudinary')

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
		res.status(200).send(response.message)
	}catch(err){
		res.status(404).send(err)
	}
}	

exports.getShow = async(req,res) => {
	try{
		const response = await crud.getResource(Show, req)
		console.log(response)
		res.status(200).send(response.data)
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