const express = require('express')
const Route = express()

const BookControlller = require('../controllers/BookController');

Route.get('/', BookControlller.index)
Route.post('/add', BookControlller.store)

module.exports = Route