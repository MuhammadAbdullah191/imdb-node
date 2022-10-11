const express = require('express')
const app = express()
const path = require('path');
const db = require('./src/config/DatabaseConfig')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs')


const userRouter = require('./src/routes/users') 

app.use('/users', userRouter )

app.get('/',(req,res)=>{
  res.status(200).render('index')
})

app.use(express.static("public"))

app.listen(3000,()=>{
  console.log('server running on port 3000')
})

