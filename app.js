const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('This always runs');
  next();
});

app.use('/hello', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Second</h1>'); // Sending a response is another alternative
});

app.use('/', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello</h1>'); // Sending a response is another alternative
});

app.listen(3000);
