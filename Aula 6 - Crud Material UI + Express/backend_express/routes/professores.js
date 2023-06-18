var express = require('express')
var router = express.Router()

var professorService = require('../services/professor.service')

// GET

router.get('/listar', (req, res, next) => {
    res.json(professorService.list())
})

// POST
router.post('/cadastrar', function(req, res, next) {
    const professor = professorService.register(req.body)
    res.json(professor)
})
 
// PUT
router.put('/atualizar/:id', function (req,res,next){
    const professor = professorService.update(req.params.id, req.body)
    res.json(professor)
})

// DELETE
router.delete('/apagar/:id', function(req,res,next){
    const ok = professorService.delete(req.params.id)
    if(ok) return res.json({"success": true})
    else return res.json({"success": false})
})

// Retrieve
router.get('/ver/:id', (req, res, next)=>{
    const out = professorService.retrieve(req.params.id)
    res.json(out)
})

module.exports = router