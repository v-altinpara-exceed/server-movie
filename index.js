const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

const movie = require('./router/movie.route'); // Imports router for the movies
const app = express()

// Устанавливаем соединение с мангустом 
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://user:user@movie.ylkge.mongodb.net/movie?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use('/movie', movie);


app.listen(process.env.PORT || config.port,
  () => console.log(`Server start on port ${config.port} ...`))