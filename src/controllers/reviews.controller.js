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

exports.getAllReviews = async(req,res)=>{
	try{
		console.log("req.query")
		console.log(req.query)
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