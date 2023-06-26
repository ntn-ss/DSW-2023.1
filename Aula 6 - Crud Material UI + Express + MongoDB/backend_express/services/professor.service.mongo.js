const ProfessorModel = require("../models/professor.model.mongo");

class ProfessorService {
  static list(req, res) {
    ProfessorModel.find({})
      .then((professores) => {
        res.status(200).json(professores);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
      });
  }

  static register(req, res) {
    const { nome, curso, titulacao, ai } = req.body;

    if (!nome || !curso || !titulacao || !ai) {
      return res.status(400).json({ error: "Faltam campos obrigatórios." });
    }

    const professor = new ProfessorModel({ nome, curso, titulacao, ai });

    professor
      .save()
      .then((savedProfessor) => {
        res.status(200).json(savedProfessor);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
      });
  }

  static retrieve(req, res){
    ProfessorModel.findById(req.params.id)
    .then(
        (professor)=>{
            res.status(200).json(professor)
        }
    )
    .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    });
  }

  static update (req, res) {
    // este ""new": true" significa que o retorno da função será o objeto modificado, não o original.
    ProfessorModel.findByIdAndUpdate(req.params.id, req.body, {"new": true})
    .then(
        (professor)=>{
            res.status(200).json(professor)
        }
    )
    .catch(
        (error)=>console.log(error)
    )
  }

  static delete (req, res) {
    ProfessorModel.findByIdAndRemove(req.params.id)
    .then(
        (professor)=>{
            res.status(200).json(professor)
        }
    )
    .catch(
        (error)=>console.log(error)
    )
  }
}

module.exports = ProfessorService;