var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
var User = require('../models/user')

exports.signup = (req, res) => {
	const user = new User({
		userName: req.body.userName,
		email: req.body.email,
		role: req.body.role,
		password: bcrypt.hashSync(req.body.password, 8)
	})

	user.save((err, user) => {
		if (err) {
			res.status(500).send({
				message: err
			})
		} else {
			res.status(200).send({
				messgae: 'User Registered Successfully'
			})
		}
	})
}

exports.signin = (req, res) => {
	User.findOne({
			email: req.body.email
		})
		.exec((err, user) => {
			if (err) {
				return res.status(500).send({
					message: err
				})
			}
			if (!user) {
				return res.status(404).send({
					message: 'User Not Found'
				})
			}

			var passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
			if(!passwordIsValid){
				return res.status(401).send({
					accessToken: null,
					message: 'Invalid Password'
				})
			}

			var token = jwt.sign({
				id:user.id
			},process.env.BCRYPT_SECRET,{
				expiresIn: 1000
			})

			res.status(200).send({
				user: {
					id: user.id,
					email: user.email,
					userName: user.userName
				},
				messgae: 'Login Successful',
				accessToken: token,
			})

		})
}