
exports.listResources = (Model)=>{
	return new Promise((resolve, reject) => {
		Model.find()
		.exec((err,resources)=>{
			if(err){
				return reject(err)
			}
			else{
				return resolve(resources)
			}
		})
	})
}

exports.createResource = (Model,req) => {
	return new Promise((resolve, reject) => {
		const modelName = Model.collection.collectionName
		let findObj = {title: req.body.title}
		if(modelName == 'reviews'){
			findObj = {_id: null}
		}
		if(modelName == 'celebrities'){
			findObj = {name:req.body.name}
		}
		if(modelName == 'mediagenres'){
			findObj = {
				"media_type": req.body.media_type,
				"genre_id": req.body.genre_id,
				"media": req.body.media
			}
		}
		if (modelName == 'mediacelebrities'){
			findObj = {
				"media_type": req.body.media_type,
				"celebrity_id": req.body.celebrity_id,
				"media": req.body.media
			}
		}
		
		Model.findOne(findObj)
		.exec((err,data)=>{
		if(err){
			return reject({message: err})
		}
		if(data){
			return resolve({message: 'Movie Name already exists'})
		}

		const movie = new Model(req.body)

		movie.save((err,movie) =>{
			if(err){
				return reject({message: err, err:err})
			}
			else{
				return resolve({data: movie,message: 'Movie Created Successfully'})
			}
		})
	})
	})
}

exports.getResource = (Model, req) => {
	return new Promise((resolve, reject) => {
		Model.findById(req.params.id)
		.exec((err,data)=>{
		if(err){
			return reject({messgae: 'Error while fetching Movie Please try again', err:err})
		}
		if(!data){
			return resolve({message: 'Movie with this id does not exists', data: data})
		}
			return resolve({message: '', data: data})
	})
	})
}
exports.getAllReviews = (Model, req) => {
	return new Promise((resolve, reject) => {
		Model.find(req)
		.exec((err,data)=>{
		if(err){
			return reject({messgae: 'Error while fetching Movie Please try again', err:err})
		}
		if(!data){
			return resolve({message: 'Movie with this id does not exists', data: data})
		}
			return resolve({message: '', data: data})
	})
	})
}

exports.updateResource = (Model, req) => {
	return new Promise((resolve,reject) => {
		Model.findByIdAndUpdate(req.params.id, {title:'testing update'},{new: true})
		.exec((err,data)=>{
		if(err){
			return reject({message: 'Unable to update movies', data: data})
		}else{
			return resolve({message:'Movie Updated Successfully', data:data})
		}
	})
	})
}

exports.deleteResource = (Model, req) => {
	return new Promise((resolve,reject) => {
		Model.findByIdAndRemove(req.params.id)
		.exec((err,data)=>{
		if(err){
			return reject({message: 'Unable to delete movies', data: data})
		}else{
			return resolve({message:'Movie Deleted Successfully', data:data})
		}
	})
	})
}