import { useEffect, useState } from 'react'

const minhaPromise = () => new Promise ((resolve, reject) => {
    setTimeout(
        () => {
                const num = Math.floor(Math.random() * 10)+1;
            if(num===1){
                reject({num, mensagem: 'Erro de conexão'});
            } else if (num === 2) {
                reject({num, mensagem: 'Erro de dados inválidos'});
            } else {
                const alunos = [
                    {id: 1, nome: 'Nathan', ira: 9.2},
                    {id: 2, nome: 'Thales', ira: 7.0},
                    {id: 3, nome: 'Breno', ira: 8.0},
                    {id: 4, nome: 'Sarah', ira: 9.19},
                    {id: 5, nome: 'Yuri', ira: 9.9}
                ];
                resolve(alunos);
            }
        }, 3000);
});
    
const MinhaPromise = () => {
    const [alunos, setAlunos] = useState([]);
    const [erro, setErro] = useState('');
  
    useEffect(() => {
      minhaPromise()
        .then((resultado) => setAlunos(resultado))
        .catch((erro) => setErro(erro));
    }, []);
  
    return (
      <>
      <h1>Questão 1</h1>
        {erro ? (
          <div>Erro: {erro.NUM} - {erro.mensagem}</div>
        ) : (
          <ul>
            {alunos.map((aluno) => (
              <li key={aluno.id}>
                {aluno.nome} - IRA: {aluno.ira}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };
  
export default MinhaPromise;