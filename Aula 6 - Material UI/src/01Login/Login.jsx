import { Box, Button, Container, Link, TextField, Typography } from "@mui/material"

import '@fontsource/roboto/400.css';

const Login = () => {
    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 10
                }}
            >
                <Typography component="h1" variant="h5">
                    Entrar
                </Typography>
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Endereço de e-mail"
                    name="email"
                    autoComplete="email" />
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    name="senha"
                    label="Senha"
                    type="password"
                    id="senha" />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Entrar
                </Button>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                    width="100%"
                >
                    <Link
                        href="#"
                        underline="none"
                        className="link"
                    >
                        <Typography>
                            Esqueceu a senha?
                        </Typography>
                    </Link>

                    <Link
                        href="#"
                        underline="none"
                        className="link"
                    >
                        <Typography>
                            Não tem conta? Cadastre-se
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}

export default Login