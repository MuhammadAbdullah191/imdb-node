const WatchList = require('../models/watchList')
const crud = require('../helpers/crud.helper')

exports.listWatchLists = async (req,res) =>{
	try{
		const response = await crud.listResources(WatchList)
		res.status(200).send(response)
	}catch(err){
		res.status(404).send({message:err})
	}
}

exports.createWatchList = async(req,res) =>{
	try{
		const response = await crud.createResource(WatchList, req)
		res.status(200).send(response.message)
	}catch(err){
		res.status(404).send(err)
	}
}	

exports.getWatchList = async(req,res) =>{
	try{
		const response = await crud.getResource(WatchList, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

exports.updateWatchList = async(req,res) =>{
	try{
		const response = await crud.updateResource(WatchList, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

exports.deleteWatchList = async(req,res) =>{
	try{
		const response = await crud.deleteResource(WatchList, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}