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
  import { useState } from "react";
  import axios from 'axios'
  
  import { useNavigate } from 'react-router-dom'
  
  const CadastrarAluno = () => {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [ira, setIra] = useState();    
    const navigate = useNavigate()
  
    function handleSubmit(event) {
      event.preventDefault();
      
      const iraNumber = parseFloat(ira);
      if (isNaN(iraNumber) || iraNumber < 0 || iraNumber > 10 || ira.split('.')[1]?.length > 2) {
        alert("O IRA deve ser um número entre 0.0 e 10.0 com até duas casas decimais.");
        return;
      }

      // como o nome das variáveis são os mesmos do objeto na API, não é preciso fazer "nome: nome", etc.
      const novoAluno = { nome, curso, ira: iraNumber };
  
      axios.post("http://localhost:3001/alunos/cadastrar", novoAluno)
      .then(
        (response)=>{
          console.log(response);
          alert(`Aluno de ID ${response.data._id} cadastrado.`)
          navigate("/listarAlunos")
        }
      )
      .catch(error=>console.log(error))
    }
  
    return (
      <>
        <Typography variant="h5" fontWeight="bold">
          Cadastrar Aluno
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="nome"
            name="nome"
            label="Nome Completo"
            onChange={(e) => setNome(e.target.value)}
            autoFocus
          />
          {/* Quanto a este componente, foi apenas uma adaptação do componente de Titulação passado em aula. Nada mais a comentar, cada item do menu reflete uma string de duas letras a ser enviado ao back-end por intermédio da API. */}
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="select-tit-label">Curso</InputLabel>
            <Select labelId="select-tit-label" label="Curso"
            value={curso}
            onChange={(e)=>setCurso(e.target.value)}>
              <MenuItem value="CC">Ciência da Computação</MenuItem>
              <MenuItem value="DD">Design Digital</MenuItem>
              <MenuItem value="EC">Engenharia de Computação</MenuItem>
              <MenuItem value="ES">Engenharia de Software</MenuItem>
              <MenuItem value="RC">Redes de Computadores</MenuItem>
              <MenuItem value="SI">Sistemas de Informação</MenuItem>
            </Select>
          </FormControl>
  
          {/* Campo de ira, que recebe e valida em vários passos a inserção do usuário: garantir um máximo de duas casas decimais e um número de zero a dez (no handleSubmit). */}

          <TextField
            margin="normal"
            required
            fullWidth
            id="ira"
            name="ira"
            label="IRA"
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
              Cadastrar
            </Button>
          </Box>
        </Box>
      </>
    );
  };
  
  export default CadastrarAluno;