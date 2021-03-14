if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();    
}

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db/db')
const PostRouter = require('./routes/post-router')

const app = express()

const port = process.env.PORT || 4000

// middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

// database connection error?
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// send a message
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', PostRouter)

// start server to listen for requests
app.listen(port, () => console.log(`Server listening on port ${port}`))