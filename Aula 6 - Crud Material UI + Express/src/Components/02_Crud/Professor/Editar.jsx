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
  import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

  const EditarProfessor = () => {

    const navigate = useNavigate()

    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [titulacao, setTitulacao] = useState("GRAD");
      const [ai, setAi] = useState({al: false, ds: false, es: false, mc: false})
  
      const { al, ds, es, mc } = ai
  
    //   const professores = [
    //     {id: 0, nome: "Zictor Zarias", curso: "SI", titulacao: "DOUT", ai: {al: true, ds: false, es: false, mc: true}},
    //     {id: 1, nome: "Voão Jilnei", curso: "DD", titulacao: "DOUT", ai: {al: false, ds: false, es: false, mc: false}},
    //     {id: 2, nome: "Pânia Tinheiro", curso: "ES", titulacao: "DOUT", ai: {al: false, ds: true, es: true, mc: false}},
    //     {id: 3, nome: "Loão Javor", curso: "DD", titulacao: "DOUT", ai: {al: false, ds: false, es: false, mc: false}},
    //     {id: 4, nome: "Savid Dena", curso: "SI", titulacao: "DOUT", ai: {al: true, ds: true, es: false, mc: true}},
    // ]

    const { id } = useParams()

    // function getProfessorById(id){
    //     for (let i=0;i<professores.length;i++){
    //         if(id==professores[i].id){
    //             return professores[i]
    //         }
    //     }
    //     return null
    // }

    function handleSubmit(event) {
      event.preventDefault();
      // alert("Chamou o submit");
  
      // const professor = {
      //   nome: nome,
      //   curso: curso,
      //   titulacao: titulacao,
      //   ai: ai
      // };
      // console.log(professor)

      const professorAtualizado = { nome, curso, titulacao, ai }

      axios.put(`http://localhost:3001/professores/atualizar/${id}`, professorAtualizado)
      .then(
        (response)=>{
          alert(`Professor de ID ${response.data.id} atualizado.`)
          navigate("/listarProfessor")
        }
      )
      .catch(error=>console.log(error))
    }
  
    // com o array de dependências vazio, o useEffect funciona como construtor
    useEffect(
        ()=> {
            // {
            //   let professor = getProfessorById(id)
            //   setNome(professor.nome)
            //   setCurso(professor.curso)
            //   setTitulacao(professor.titulacao)
            //   setAi(professor.ai)
            // }

            axios.get(`http://localhost:3001/professores/ver/${id}`)
            .then((response)=>{
              setNome(response.data.nome)
              setCurso(response.data.curso)
              setTitulacao(response.data.titulacao)
              setAi(response.data.ai)
            })
            .catch(error=>console.log(error))
        }, []
    )
    function handleCheckbox(event) {
      setAi({
          ...ai,
          [event.target.name]: event.target.checked
      })
    }
  
    return (
      <>
        <Typography variant="h5" fontWeight="bold">
          Editar Professor {id}
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
                  <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckbox}/>} label="Engenharia da Software" />
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
              Atualizar
            </Button>
          </Box>
        </Box>
      </>
    );
  };
  
  export default EditarProfessor;  