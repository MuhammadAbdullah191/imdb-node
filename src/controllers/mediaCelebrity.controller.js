const crud = require('../helpers/crud.helper')
const MediaCelebrity = require('../models/mediaCelebrity')

exports.listMediaCelebrity = async (req,res) =>{
	try{
		const response = await crud.listResources(MediaCelebrity)
		res.status(200).send(response)
	}catch(err){
		res.status(404).send({message:err})
	}
}

exports.createMediaCelebrity = async(req,res) =>{
	try{
		const response = await crud.createResource(MediaCelebrity, req)
		res.status(200).send(response.message)
	}catch(err){
		res.status(404).send(err)
	}
}	

exports.getMediaCelebrity = async(req,res) =>{
	try{
		const response = await crud.getResource(MediaCelebrity, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

// exports.getAllGenre = async(req,res) =>{
// 	return new Promise((resolve, reject) => {
// 	MediaGenreModel.find({'media':req.params.id}).populate('genre_id')
// 		.exec((err,data)=>{
// 			console.log(data)
// 		if(err){
// 			return reject({messgae: 'Error while fetching Movie Please try again', err:err})
// 		}
// 		if(!data){
// 			return  resolve({message: 'Movie with this id does not exists', data: data})
// 		}
// 			return resolve({message: '', data: data})
// 	})
// })
// }

exports.createMediaCelebrities = async(CelebritiesData) =>{
	console.log("CelebritiesData")
	console.log(CelebritiesData)
	const celebrities = CelebritiesData.celebrities
	console.log(celebrities.length)
	console.log(CelebritiesData.media_type)
	console.log(celebrities[0].value)
	console.log(CelebritiesData.media)
	for (let i = 0; i < celebrities.length; i++) {
		let data =  {
			body:{
				"media_type": CelebritiesData.media_type,
				"celebrity_id": celebrities[i].value,
				"media": CelebritiesData.media
			}
		}
		let response = await crud.createResource(MediaCelebrity, data)
		console.log('response')
		console.log(response)
	}
	
	return 'done'

}


exports.updateMediaCelebrity = async(req,res) =>{
	try{
		const response = await crud.updateResource(MediaCelebrity, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}

exports.deleteMediaCelebrity = async(req,res) =>{
	try{
		const response = await crud.deleteResource(MediaCelebrity, req)
		res.status(200).send(response.data)
	}catch(err){
		res.status(404).send(err)
	}
}