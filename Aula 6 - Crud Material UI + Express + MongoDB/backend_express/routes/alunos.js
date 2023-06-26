var express = require('express')
var router = express.Router()

// var professorService = require('../services/professor.service')
var alunoServiceMongo = require('../services/aluno.service.mongo')

// métodos com MongoDB

// GET
router.get("/listar", (req, res, next)=>{
    alunoServiceMongo.list(req, res)
})

// POST
router.post("/cadastrar", (req, res, next)=>{
    alunoServiceMongo.register(req, res)
})

// PUT
router.put("/atualizar/:id", (req, res, next)=>{
    alunoServiceMongo.update(req, res)
})

router.delete("/apagar/:id", (req, res, next)=>{
    alunoServiceMongo.delete(req, res)
})

// RETRIEVE
router.get('/ver/:id', (req, res, next) =>{
    alunoServiceMongo.retrieve(req, res)
})

module.exports = router