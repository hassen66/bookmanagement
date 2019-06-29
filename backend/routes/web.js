const express = require('express')
const Route = express()

const BookControlller = require('../controllers/BookController');

Route.get('/', BookControlller.index)

module.exports = Route