const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware');
  next(); // Allows request to continue to next middleware in line. Otherwise, it won't run
});

app.use((req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello</h1>'); // Sending a response is another alternative
});

app.listen(3000);
