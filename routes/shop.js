const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<h1>Hello</h1>'); // Sending a response is another alternative
});

module.exports = router;
