const Review = require('../models/review')
const crud = require('../helpers/crud.helper')

exports.listReviews = async (req,res) =>{
	try{
		const response = await crud.listResources(Review)
		res.status(200).send(response)
	}catch(err){
		res.status(404).send({message:err})
	}
}

exports.createReview = async(req,res) =>{
	try{
		const response = await crud.createResource(Review, req)
		res.status(200).send(response.message)
	}catch(err){
		res.status(404).send(err)
	}
}	

exports.getReview = async(req,res) =>{
	try{
		const response = await crud.getResource(Review, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

exports.getSpecificReview = async(req,res) =>{
	console.log("req.params")
	console.log(req.query)
	try{
		Review.findOne(req.query)
		.exec((err,data)=>{
			console.log(data)
		if(err){
			return res.send({messgae: 'Error while fetching Movie Please try again', err:err})
		}
		if(!data){
			return res.send({message: 'Movie with this id does not exists', data: data})
		}
			return res.send({message: '', data: data})
	})
	}catch(err){
		res.status(404).send(err)
	}
}

exports.getAllReviews = async(req,res)=>{
	try{
		const response = await crud.getAllReviews(Review, req.query)
		res.status(200).send(response)
	}catch(err){
		res.status(403).send(err)
	}
}

exports.updateReview = async(req,res) =>{
	try{
		const response = await crud.updateResource(Review, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

exports.deleteReview = async(req,res) =>{
	try{
		const response = await crud.deleteResource(Review, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}