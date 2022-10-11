const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/',(req,res)=>{
	res.status(200).send('Hello World')
})

app.listen(3000,()=>{
	console.log('server running on port 3000')
})