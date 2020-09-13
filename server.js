const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser'),
  controller = require('./controller.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);

app.listen(port);
console.log('Restfull API Start in port : ' + port);