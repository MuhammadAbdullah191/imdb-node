const express = require('express')
const router = express.Router()
const userController = require('../controllers/users.controller')
let {signup, signin} = require('../controllers/auth.controller')
const verifyToken = require('../middlewares/authJWT')


router.post('/register', signup)
// router.use(verifyToken)

router.get('/', userController.testFunction)

router.post('/', (req,res)=>{
	res.send(req.body.firstName)
})


router.get('/login', signin)

router.get('/new', (req,res)=>{
	res.render("users/new", {firstName: 'test'})
})

module.exports = router