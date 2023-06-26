// ES5

/*var express = require('express');
var router = express.Router();*/

// module.exports = router;

// ES6
import express from 'express'
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router