const Genre = require('../models/genre')
const crud = require('../helpers/crud.helper')

exports.listGenres = async (req,res) =>{
	try{
		const response = await crud.listResources(Genre)
		res.status(200).send(response)
	}catch(err){
		res.status(404).send({message:err})
	}
}

exports.createGenre = async(req,res) =>{
	try{
		const response = await crud.createResource(Genre, req)
		res.status(200).send(response.message)
	}catch(err){
		res.status(404).send(err)
	}
}	

exports.getGenre = async(req,res) =>{
	try{
		const response = await crud.getResource(Genre, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

exports.updateGenre = async(req,res) =>{
	try{
		const response = await crud.updateResource(Genre, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

exports.deleteGenre = async(req,res) =>{
	try{
		const response = await crud.deleteResource(Genre, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}