const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// Parses the response for forms
app.use(bodyParser.urlencoded());

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
