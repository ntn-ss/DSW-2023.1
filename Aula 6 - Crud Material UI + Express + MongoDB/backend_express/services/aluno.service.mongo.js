const AlunoModel = require("../models/aluno.model.mongo");

class AlunoService {
  static list(req, res) {
    AlunoModel.find({})
      .then((alunos) => {
        res.status(200).json(alunos);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
      });
  }

  static register(req, res) {
    const { nome, curso, ira } = req.body;

    if (!nome || !curso || !ira) {
      return res.status(400).json({ error: "Faltam campos obrigatórios." });
    }

    const aluno = new AlunoModel({ nome, curso, ira });

    aluno
      .save()
      .then((savedAluno) => {
        res.status(200).json(savedAluno);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
      });
  }

  static retrieve(req, res){
    AlunoModel.findById(req.params.id)
    .then(
        (aluno)=>{
            res.status(200).json(aluno)
        }
    )
  }

  static update (req, res) {
    // este ""new": true" significa que o retorno da função será o objeto modificado, não o original.
    AlunoModel.findByIdAndUpdate(req.params.id, req.body, {"new": true})
    .then(
        (aluno)=>{
            res.status(200).json(aluno)
        }
    )
    .catch(
        (error)=>console.log(error)
    )
  }

  static delete (req, res) {
    AlunoModel.findByIdAndRemove(req.params.id)
    .then(
        (aluno)=>{
            res.status(200).json(aluno)
        }
    )
    .catch(
        (error)=>console.log(error)
    )
  }
}

module.exports = AlunoService;