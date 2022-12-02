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
	MediaCelebrity.find({'media':req.params.id}).populate('celebrity_id')
		.exec((err,data)=>{
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
	const celebrities = CelebritiesData.celebrities
	for (const key in celebrities)  {
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
		}catch(e){
			console.log(e)
		}
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