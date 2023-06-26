import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

const CadastrarProfessor = () => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [titulacao, setTitulacao] = useState("GRAD");
    const [ai, setAi] = useState({al: false, ds: false, es: false, mc: false})

    const { al, ds, es, mc } = ai

    const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
    
    // como o nome das variáveis são os mesmos do objeto na API, não é preciso fazer "nome: nome", etc.
    const novoProfessor = {nome, curso, titulacao, ai}

    axios.post("http://localhost:3001/professores/cadastrar", novoProfessor)
    .then(
      (response)=>{
        console.log(response);
        alert(`Professor de ID ${response.data._id} cadastrado.`)
        navigate("/listarProfessores")
      }
    )
    .catch(error=>console.log(error))
  }

  function handleCheckbox(event) {
    setAi({
        ...ai,
        [event.target.name]: event.target.checked
    })
  }

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Cadastrar Professor
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
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="select-tit-label">Curso</InputLabel>
          <Select labelId="select-tit-label" label="Titulação"
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

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="select-tit-label">Titulação</InputLabel>
          <Select
            labelId="select-tit-label"
            label="Titulação"
            value={titulacao}
            onChange={(e)=>setTitulacao(e.target.value)}
          >
            <MenuItem value="GRAD">Graduação</MenuItem>
            <MenuItem value="MEST">Mestrado</MenuItem>
            <MenuItem value="DOUT">Doutorado</MenuItem>
          </Select>
        </FormControl>

        <FormControl
            component="fieldset"
            variant="standard"
            sx={{
                mt: 2, ml:2
            }}
        >
            <FormLabel
                component="legend"
                sx={{fontSize: 12, mb:2}}
            >
                Áreas de Interesse
            </FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={al} name="al" onChange={handleCheckbox}/>} label="Algoritmos" />
                <FormControlLabel control={<Checkbox checked={ds} name="ds" onChange={handleCheckbox}/>} label="Desenvolvimento de Software" />
                <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckbox}/>} label="Engenharia de Software" />
                <FormControlLabel control={<Checkbox checked={mc} name="mc" onChange={handleCheckbox}/>} label="Matemática Computacional" />
            </FormGroup>
        </FormControl>

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

export default CadastrarProfessor;