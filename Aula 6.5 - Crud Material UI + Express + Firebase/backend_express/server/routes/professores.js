import express from 'express'
var router = express.Router()
import professorServices from '../services/professor.services.firebase'

// GET users listing
router.get('/', function(req,res,next) {
    res.send("respond with a resource")
})

router.get('/listar', function(req, res, next) {
    professorServices.list(req, res, next)
})

router.post('/cadastrar', (req, res, next)=>{
    professorServices.register(req, res)
})

router.put('/atualizar/:id', (req, res, next)=>{
    professorServices.update(req, res)
})

router.delete('/apagar/:id', (req,res,next)=>{
    professorServices.delete(req, res)
})

router.get('/ver/:id', (req, res, next) => {
    professorServices.retrieve(req, res)
})

export default router