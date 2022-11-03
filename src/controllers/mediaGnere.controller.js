const crud = require('../helpers/crud.helper')
const MediaGenre = require('../models/mediaGenre')

exports.listMediaGenre = async (req,res) =>{
	try{
		const response = await crud.listResources(MediaGenre)
		res.status(200).send(response)
	}catch(err){
		res.status(404).send({message:err})
	}
}

exports.createMediaGenre = async(req,res) =>{
	try{
		const response = await crud.createResource(MediaGenre, req)
		res.status(200).send(response.message)
	}catch(err){
		res.status(404).send(err)
	}
}	

exports.getMediaGenre = async(req,res) =>{
	try{
		const response = await crud.getResource(MediaGenre, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

// exports.getAllMediaGenres = async(req,res)=>{
// 	try{
// 		console.log("req.query")
// 		console.log(req.query)
// 		const response = await crud.getAllMediaGenres(MediaGenre, req.query)
// 		res.status(200).send(response)
// 	}catch(err){
// 		res.status(403).send(err)
// 	}
// }

exports.updateMediaGenre = async(req,res) =>{
	try{
		const response = await crud.updateResource(MediaGenre, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

exports.deleteMediaGenre = async(req,res) =>{
	try{
		const response = await crud.deleteResource(MediaGenre, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}