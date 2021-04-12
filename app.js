var express = require('express');
var app = express();

app.use("/assets", express.static(__dirname + '/assets'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/depoimentos', function (req, res) {
  res.render('depoimentos');
});

app.get('/clareamento', function (req, res) {
  res.render('clareamento');
});

app.get('/invisalign', function (req, res) {
  res.render('invisalign');
});

app.get('/ortodontia', function (req, res) {
  res.render('ortodontia');
});

app.get('/odonto-sono', function (req, res) {
  res.render('odonto-sono');
});

app.get('/odonto-mio', function (req, res) {
  res.render('odonto-mio');
});

app.get('/ortopedia', function (req, res) {
  res.render('ortopedia');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});