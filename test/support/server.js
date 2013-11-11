'use strict';

var express = require('express');
var renderRoutes = require('render-routes');

var app = express();

app.get('/routes', function (req, res) {
  console.log('sending routes');
  res.send(renderRoutes(app.routes));
});

app.listen(process.env.ZUUL_PORT);
