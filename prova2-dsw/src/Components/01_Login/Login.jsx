import { Button, Box, Container, Typography, TextField, Link } from "@mui/material";
import { useContext, useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import loginContext from "../../context/loginContext";

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  // esta função impede o recarregamento da página, cria um objeto JSON para o usuário composto dos estados criados acima, envia-o à URL da API do Express por meio de uma requisição POST pelo axios e exibe o resultado da requisição, levando o usuário à listagem de alunos logo após, caso o retorno seja "true". Digite "jefferson@gmail.com" no e-mail e "jefferson1234" na senha!
  const onSubmit = (e) => {
    e.preventDefault()

    const usuario = {email, senha}
    axios.post('http://localhost:3001/login', usuario)
      .then(res => {
        console.log(res)
        navigate('/listarAlunos')
      })
  }

  return (
    <Container
        maxWidth="xs"
    >
      <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 8
        }}
      >
        {/* campos de texto atrelados a estados, cuja edição de valores reflete à atualização imediata dos estados e clique no botão ativa o handleSubmit. */}
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <TextField
          required
          margin="normal"
          fullWidth
          autoFocus
          label="E-mail"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <TextField
          required
          margin="normal"
          fullWidth
          autoFocus
          label="Senha"
          id="senha"
          name="senha"
          type="password"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />

        <Button
            fullWidth
            variant="contained"
            sx={{
                my: 2
            }}
            onClick={onSubmit}
        >
            Entrar
        </Button>

        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <Link
                underline="none"
                href = "#"
            >
                Esqueceu a senha?
            </Link>
            <Link
                underline="none"
                href = "#"
            >
                Cadastre-se.
            </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
