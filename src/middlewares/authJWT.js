const jwt = require('jsonwebtoken')
const User = require('../models/user')

const verifyToken = (req, res, next) => {
	if (req.headers.authorization) {
		jwt.verify(req.headers.authorization, process.env.BCRYPT_SECRET, function (err, decode) {
			if (err) {
				res.send({message: 'Invalid User'})
				req.user = undefined
				return
			}
			User.findOne({
					id: decode.id
				})
				.exec((err, user) => {
					if (err) {
						res.status(500).send({
							message: err
						})
					} else {
						req.user = user
					}
				})
		})
	} else {
		res.send({message: 'Invalid User'})
		req.user = undefined
		return
	}

	next()
}

module.exports = verifyToken;