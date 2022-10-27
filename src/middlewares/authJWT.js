const jwt = require('jsonwebtoken')
const User = require('../models/user')

const verifyToken = (req, res, next) => {
	if (req.headers.authorization) {
		jwt.verify(req.headers.authorization, process.env.BCRYPT_SECRET, function (err, decode) {
			if (err) {
				req.user = undefined
				next()
				return
			}
			User.findOne({
					id: decode.id
				})
				.exec((err, user) => {
					if (err) {
						req.user = undefined
						next()
						return
					} else {
						req.user = user
						next()
						return
					}
				})
		})
	} else {
		res.send({message: 'Invalid User'})
		req.user = undefined
		next()
		return
	}
	return
}

module.exports = verifyToken;