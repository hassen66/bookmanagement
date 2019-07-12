const express = require('express')
const Route = express()

const BookControlller = require('../controllers/BookController');

Route.get('/', BookControlller.index)
Route.post('/add', BookControlller.store)
Route.get('/edit/:id', BookControlller.edit)
Route.post('/update/:id', BookControlller.update)

module.exports = Route