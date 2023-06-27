var express = require('express')
var router = express.Router()

// importa o serviço de login e ativa seu método "login" na chamada do método post do router.
var loginService = require('../services/LoginService')

router.post("/login", (req, res, next)=>{
    loginService.login(req, res)
})
module.exports = router