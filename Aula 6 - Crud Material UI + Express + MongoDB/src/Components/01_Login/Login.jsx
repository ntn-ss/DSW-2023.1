import { Button, Box, Container, Typography, TextField, Link } from "@mui/material";

const Login = () => {
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
        />

        <TextField
          required
          margin="normal"
          fullWidth
          autoFocus
          label="Senha"
          id="password"
          name="password"
          type="password"
        />

        <Button
            fullWidth
            variant="contained"
            sx={{
                my: 2
            }}
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
