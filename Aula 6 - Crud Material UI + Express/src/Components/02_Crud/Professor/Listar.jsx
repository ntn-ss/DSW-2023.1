import { Paper, Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Typography, Box } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

import { Link } from 'react-router-dom'

const ListarProfessor = () => {

    function deleteProfessorById(id){
        if(window.confirm("Deseja excluir?")){
            alert(`Professor ${id} excluído.`)
        }
    }

    const professores = [
        {id: 0, nome: "Zictor Zarias", curso: "SI", titulacao: "DOUT"},
        {id: 1, nome: "Voão Jilnei", curso: "DD", titulacao: "DOUT"},
        {id: 2, nome: "Pânia Tinheiro", curso: "ES", titulacao: "DOUT"},
        {id: 3, nome: "Loão Javor", curso: "DD", titulacao: "DOUT"},
        {id: 4, nome: "Savid Dena", curso: "SI", titulacao: "DOUT"},
    ]

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Professor
            </Typography>
            <TableContainer component={Paper} sx={{my: 4}}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>TITULAÇÃO</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>                 
                    <TableBody>
                        {
                            professores.map(
                                (professor)=>{
                                    return (
                                        <StyledTableRow key={professor.id}>
                                            <StyledTableCell>{professor.id}</StyledTableCell>
                                            <StyledTableCell>{professor.nome}</StyledTableCell>
                                            <StyledTableCell>{professor.curso}</StyledTableCell>
                                            <StyledTableCell>{professor.titulacao}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton aria-label="edit" color="primary" component={Link} to={`/editarProfessor/${professor.id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" color="error" onClick={()=>deleteProfessorById(professor.id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
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

export default ListarProfessor