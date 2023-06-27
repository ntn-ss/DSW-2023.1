// cria variáveis na memória (tentamos fazer pelo Mongo, mas não tivemos tempo)
const emailOriginal = "jefferson@gmail.com"
const senhaOriginal = "jefferson123"

class Login{
    // método de login: desestrutura os dados do formulário do MUI, verifica se seus valores são iguais aos das variáveis de credenciais criadas acima e retorna um JSON referente ao resultado dessa verificação.
    static login(req, res){
        const {email, senha} = req.body

        if(email == emailOriginal && senha == senhaOriginal)
            return res.json({ok: true})

        return res.json({ok: false})
    }
}

module.exports = Login