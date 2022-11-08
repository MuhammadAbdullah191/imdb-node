const crud = require('../helpers/crud.helper')
const MediaGenre = require('../models/mediaGenre')
const MediaGenreModel = require('../models/mediaGenre')

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

exports.getAllGenre = async(req,res) =>{
	return new Promise((resolve, reject) => {
	MediaGenreModel.find({'media':req.params.id}).populate('genre_id')
		.exec((err,data)=>{
			console.log(data)
		if(err){
			return reject({messgae: 'Error while fetching Movie Please try again', err:err})
		}
		if(!data){
			return  resolve({message: 'Movie with this id does not exists', data: data})
		}
			return resolve({message: '', data: data})
	})
})
}

exports.createMediaGenres = async(genreData) =>{
	const genreIds = genreData.genres
	// console.log(Array.isArray(genreIds))
	for (let i = 0; i < genreIds.length; i++) {
		let data =  {
			body:{
				"media_type": genreData.media_type,
				"genre_id": genreIds[i],
				"media": genreData.media
			}
		}
		let response = await crud.createResource(MediaGenre, data)
		console.log(response)
	}
	
	return 'done'

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