const ProfessorModel = require('../models/professor.model')

let professores = [
    {id: 0, nome: "Zictor Zarias", curso: "SI", titulacao: "DOUT", ai: {al: true, ds: false, es: false, mc: true}},
    {id: 1, nome: "Voão Jilnei", curso: "DD", titulacao: "DOUT", ai: {al: false, ds: false, es: false, mc: false}},
    {id: 2, nome: "Pânia Tinheiro", curso: "ES", titulacao: "DOUT", ai: {al: false, ds: true, es: true, mc: false}},
    {id: 3, nome: "Loão Javor", curso: "DD", titulacao: "DOUT", ai: {al: false, ds: false, es: false, mc: false}},
    {id: 4, nome: "Savid Dena", curso: "SI", titulacao: "DOUT", ai: {al: true, ds: true, es: false, mc: true}},
]

let id = 5

class ProfessorService {
    
    static list() {
        return professores
    }

    static register(data) {
        let professor = new ProfessorModel(
            id++,
            data.nome,
            data.titulacao,
            data.ai
        )
        professores.push(professor)
        return professor
    }

    static update(idProfessor, data) {
        for (let professor of professores) {
            if (professor.id == idProfessor) {
                professor.nome = data.nome
                professor.curso = data.curso
                professor.titulacao = data.titulacao
                professor.ai = data.ai
                return professor
            }
        }
        return null
    }

    static delete(idProfessor){
        for (let professor of professores) {
            if (professor.id == idProfessor){
                professores.pop([professor.id])
                
                return true
            }
        }
        return false
    }

    static retrieve(idProfessor){
        for (let professor of professores) {
            if (professor.id == idProfessor){
                return professor
            }
        }
        return null
    }
}

module.exports = ProfessorService