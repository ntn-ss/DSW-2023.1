import { Paper, Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Typography, Box } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import axios from "axios"

const ListarAluno = () => {

    let media = 0;
    // const [media, setMedia] = useState(0);
    const [alunos, setAlunos] = useState([])

    const navigate = useNavigate()

    useEffect(
        ()=>{
            // recebe o vetor de alunos da API
                axios.get('http://localhost:3001/alunos/listar')
                    .then(
                    (response)=>{
                        setAlunos(response.data)
                    })
                    .catch(error=>console.log(error))
        }, []
    )

    function apagarAluno(id) {
        if (window.confirm(`Deseja excluir o aluno de ID ${id}?`)) {
            axios.delete(`http://localhost:3001/alunos/apagar/${id}`)
            .then(
                (response)=>{
                    console.log(response);
                    const resultado = alunos.filter(aluno=>aluno._id!=id)
                    setAlunos(resultado)
                }
            )
            .catch(error=>console.log(error))
        }
    }

    // cálculo de média: se o vetor de alunos tiver ao menos um elemento, percorra-o numa estrutura de repetição, some o valor da variável de média ao campo de IRA do elemento percorrido atual. Ao fim da repetição, divida o valor total da variável pela quantidade de elementos no vetor e retorne o resultado.
    function calcularMedia(){
        if (alunos.length > 0) {
            for(let i = 0;i<alunos.length;i++){
                media += alunos[i].ira
            }
            media = media/alunos.length
            return media
        }
    }
    // execute o cálculo da média
    {calcularMedia()}
    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Alunos
            </Typography>
            <TableContainer component={Paper} sx={{my: 4}}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>                 
                    <TableBody>
                        { media>0 &&
                            alunos.map(
                                (aluno)=>{
                                    return (
                                        <StyledTableRow key={aluno._id} sx={{
                                            // se o aluno mapeado no momento possuir um ira menor que o da média calculada acima e o valor da variável de média for maior que zero, o fundo da célula do aluno ficará vermelho. O important está aqui para garantir que os estilos de colorização que o senhor passou na aula sejam sobrescritos.
                                            backgroundColor: `${aluno.ira < media && media> 0 ? "red !important" : ""}`
                                        }}>
                                            <StyledTableCell>{aluno._id}</StyledTableCell>
                                            <StyledTableCell>{aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.ira}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton aria-label="edit" color="primary" component={Link} to={`/editarAluno/${aluno._id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" color="error" onClick={()=>apagarAluno(aluno._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
                        <StyledTableRow>
                            <StyledTableCell colSpan={3} align="right">Média:</StyledTableCell>
                            <StyledTableCell>{media}</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>    
                </Table>
            </TableContainer>
        </>
    )
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default ListarAluno