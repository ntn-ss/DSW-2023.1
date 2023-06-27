var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// mongo.conn
require("./db/mongo.connection")

var professores = require('./routes/professores');
var alunos = require('./routes/alunos');

// chama a rota criada
var login = require('./routes/login');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

app.use('/professores', professores);
app.use('/alunos', alunos);

// faz com que a rota de login se ligue à rota /, senão a URL ficaria "/login/login", o que seria feio.
app.use('/', login);

module.exports = app;