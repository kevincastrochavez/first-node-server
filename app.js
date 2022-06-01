const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parses the response for forms
app.use(bodyParser.urlencoded());

app.use('/', (req, res, next) => {
  next();
});

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>'
  ); // Sending a response is another alternative
});

app.use('/product', (req, res, next) => {
  console.log(req.body.title);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello</h1>'); // Sending a response is another alternative
});

app.listen(3000);
