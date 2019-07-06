const express = require('express')
const app = express()
const webRoute = require('./routes/web')

app.use(express.urlencoded());
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/',webRoute);

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})