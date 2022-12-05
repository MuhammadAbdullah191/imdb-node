const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors')
const db = require('./src/config/DatabaseConfig')
const userRouter = require('./src/routes/users')
const movieRouter = require('./src/routes/movies') 
const showRouter = require('./src/routes/shows')
const reviewRouter = require('./src/routes/reviews')
const celebrityRouter = require('./src/routes/celebrities')
const watchListRouter = require('./src/routes/watchLists')
const genreRouter = require('./src/routes/genre')
const mediaGenreRouter = require('./src/routes/mediaGenre')
const mediaCelebrityRouter = require('./src/routes/mediaCelebrity')
const bodyParser = require('body-parser'); 
// add cors

app.use(express.urlencoded({extended: true}))

// app.use(express.json())
app.use(cors());
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs') 
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.json());
app.use('/users', userRouter )
app.use('/movies',movieRouter )
app.use('/shows',showRouter)
app.use('/reviews',reviewRouter)
app.use('/celebrities',celebrityRouter)
app.use('/watchList',watchListRouter)
app.use('/genre',genreRouter)
app.use('/mediaGenre',mediaGenreRouter)
app.use('/mediaCelebrity',mediaCelebrityRouter)

app.get('/',(req,res)=>{
  res.status(200).send('Welcome to server')
})

app.use("/public", express.static('public'))

app.listen(3000,()=>{
  console.log('server running on port 3000')
})

