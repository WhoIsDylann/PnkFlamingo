require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 4000
const {getHTML, getCSS, getJS, seed, seed1, sendMessage, getNews} = require ('./controller');
const { or } = require('sequelize');

app.use(express.json())
app.use(cors())
app.use(express.static('client'))
app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJS)
app.post('/seed', seed)
app.post('/seed1', seed1)
app.post('/message', sendMessage)
app.get('/news', getNews)

app.listen(port, () => console.log(`up on ${port}`))