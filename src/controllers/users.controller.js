var User = require('../models/user')

exports.testFunction = (req,res) =>{
	res.send({message: "Post a new test message"})
}

exports.findUser = (req,res) =>{
	User.findById(req.params.userId)
	.exec((err,user)=>{
		if(err){
			res.status(404).send({message:err})
			return
		}
		res.status(200).send(user)
	})
}

