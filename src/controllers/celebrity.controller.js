const Celebrity = require('../models/celebrity')
const crud = require('../helpers/crud.helper')

exports.listCelebrities = async (req,res) =>{
	try{
		const response = await crud.listResources(Celebrity)
		res.status(200).send(response)
	}catch(err){
		res.status(404).send({message:err})
	}
}

exports.createCelebrity = async(req,res) =>{
	try{
		const response = await crud.createResource(Celebrity, req)
		res.status(200).send(response.message)
	}catch(err){
		res.status(404).send(err)
	}
}	

exports.getCelebrity = async(req,res) =>{
	try{
		const response = await crud.getResource(Celebrity, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

exports.updateCelebrity = async(req,res) =>{
	try{
		const response = await crud.updateResource(Celebrity, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

exports.deleteCelebrity = async(req,res) =>{
	try{
		const response = await crud.deleteResource(Celebrity, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}