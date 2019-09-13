require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const articlesRouter = require('./articles/articles-router')

const app = express()

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common'))
app.use(cors())
app.use(helmet())

app.use('/articles', articlesRouter)

app.get('/', (req, res) => {
  res.send('Hello, world!')
})


module.exports = app