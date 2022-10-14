const express = require('express')
const app = express()
const path = require('path');
const db = require('./src/config/DatabaseConfig')
const userRouter = require('./src/routes/users')
const movieRouter = require('./src/routes/movies') 
const showRouter = require('./src/routes/shows')
const reviewRouter = require('./src/routes/reviews')
const celebrityRouter = require('./src/routes/celebrities')
const watchListRouter = require('./src/routes/watchLists')
const genreRouter = require('./src/routes/genre')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

app.use('/users', userRouter )
app.use('/movies',movieRouter )
app.use('/shows',showRouter)
app.use('/reviews',reviewRouter)
app.use('/celebrities',celebrityRouter)
app.use('/watchList',watchListRouter)
app.use('/genre',genreRouter)

app.get('/',(req,res)=>{
  res.status(200).render('index')
})

app.use("/public", express.static('public'))

app.listen(3000,()=>{
  console.log('server running on port 3000')
})

