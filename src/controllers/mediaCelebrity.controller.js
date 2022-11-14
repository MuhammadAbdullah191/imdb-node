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

exports.getAllCelebrities = (req,res) =>{
	console.log(req.params)
	MediaCelebrity.find({'media':req.params.id}).populate('celebrity_id')
		.exec((err,data)=>{
			console.log("data")
			console.log(data)
		if(err){
			return res.send({messgae: 'Errors while fetching Movie Please try again', err:err})
		}
		if(!data){
			return  res.send({message: 'Movie with this id does not exists', data: data})
		}
			return res.send({message: '', data: data})
})
}

exports.createMediaCelebrities = async(CelebritiesData) =>{
	console.log("CelebritiesData")
	console.log(CelebritiesData)
	console.log("CelebritiesData length")
	const celebrities = CelebritiesData.celebrities
	for (const key in celebrities)  {
		console.log(celebrities[key].role_name)
		let data =  {
			body:{
				"media_type": CelebritiesData.media_type,
				"celebrity_id": key,
				"media": CelebritiesData.media,
				"role_name": celebrities[key].role_name,
				"role_type": 'Director'
			}
		}
		try{
			let response = await crud.createResource(MediaCelebrity, data)
			console.log('response')
			console.log(response)
		}catch(e){
			console.log(e)
		}
	}
	// for (let i = 0; i < celebrities.length; i++) {
	// 	let data =  {
	// 		body:{
	// 			"media_type": CelebritiesData.media_type,
	// 			"celebrity_id": celebrities[i].value,
	// 			"media": CelebritiesData.media,
	// 			"role_name": 'Rony Stark',
	// 			"role_type":'Star'
	// 		}
	// 	}
	// 	console.log('I am here')
	// 	try{
	// 		let response = await crud.createResource(MediaCelebrity, data)
	// 		console.log('response')
	// 		console.log(response)
	// 	}catch(e){
	// 		console.log(e)
	// 	}
		
	// }
	
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