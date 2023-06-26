import express from 'express'
var router = express.Router()
import alunoServices from '../services/aluno.services.firebase'

// GET users listing
router.get('/', function(req,res,next) {
    res.send("respond with a resource")
})

router.get('/listar', function(req, res, next) {
    alunoServices.list(req, res, next)
})

router.post('/cadastrar', (req, res, next)=>{
    alunoServices.register(req, res)
})

router.put('/atualizar/:id', (req, res, next)=>{
    alunoServices.update(req, res)
})

router.delete('/apagar/:id', (req,res,next)=>{
    alunoServices.delete(req, res)
})

router.get('/ver/:id', (req, res, next) => {
    alunoServices.retrieve(req, res)
})

export default router