import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

  const EditarAluno = () => {

    const navigate = useNavigate()

    const [nome, setNome] = useState("");
    const [nomeHeader, setNomeHeader] = useState("")
    const [curso, setCurso] = useState("");
    const [ira, setIra] = useState()

    const { id } = useParams()

    function handleSubmit(event) {
      event.preventDefault();

      const iraNumber = parseFloat(ira);
      if (isNaN(iraNumber) || iraNumber < 0 || iraNumber > 10 || ira.split('.')[1]?.length > 2) {
        alert("O IRA deve ser um número entre 0.0 e 10.0 com até duas casas decimais.");
        return;
      }

      const alunoAtualizado = { nome, curso, ira: iraNumber }

      axios.put(`http://localhost:3001/alunos/atualizar/${id}`, alunoAtualizado)
      .then(
        (response)=>{
          alert(`Aluno de ID ${response.data._id} atualizado.`)
          navigate("/listarAlunos")
        }
      )
      .catch(error=>console.log(error))
    }
  
    // com o array de dependências vazio, o useEffect funciona como construtor
    useEffect(
        ()=> {

            axios.get(`http://localhost:3001/alunos/ver/${id}`)
            .then((response)=>{
              setNome(response.data.nome)
              setNomeHeader(response.data.nome)
              setCurso(response.data.curso)
              setIra(response.data.ira)
            })
            .catch(error=>console.log(error))
        }, []
    )
  
    return (
      <>
        <Typography variant="h5" fontWeight="bold">
          Editar Aluno {nomeHeader}
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="nome"
            name="nome"
            label="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            autoFocus
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="select-tit-label">Curso</InputLabel>
            <Select labelId="select-tit-label" label="Titulação"
            value={curso}
            onChange={(e)=>setCurso(e.target.value)}>
              <MenuItem value="CC">Ciência da Computação</MenuItem>
              <MenuItem value="DD">Design Digital</MenuItem>
              <MenuItem value="EC">Engenharia de Computação</MenuItem>
              <MenuItem value="ES">Engenharia de Software</MenuItem>
              <MenuItem value="SI">Sistemas de Informação</MenuItem>
            </Select>
          </FormControl>
  
          <TextField
            margin="normal"
            required
            fullWidth
            id="ira"
            name="ira"
            label="IRA"
            value={ira}
            onChange={(e) => setIra(e.target.value)}
            inputProps={{
              step: 0.01,
              pattern: "^(?:[0-9]|10)(?:\.[0-9]{1,2})?$",
              title: "O IRA deve ser um número entre 0.0 e 10.0 com até duas casas decimais."
            }}
          />
  
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              my: 3
            }}
          >
            <Button type="submit" variant="contained" sx={{ my: 3 }}>
              Atualizar
            </Button>
          </Box>
        </Box>
      </>
    );
  };
  
  export default EditarAluno;  