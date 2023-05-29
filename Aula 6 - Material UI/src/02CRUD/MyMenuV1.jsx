import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { useState } from "react"

const MyMenuV1 = () => {

    const [anchorElProfessor, setAnchorElProfessor] = useState(null) //Representa o elemento HTML do botão Professores

    const handleOpenProfessorMenu = (event) => {
        setAnchorElProfessor(event.currentTarget)
    }
    const handleCloseProfessorMenu = () => {
        setAnchorElProfessor (null)
    }

    const profDropMenu = () => {
        return (
            <Box>
                <Button
                    sx={{
                        my: 2, color: "white"
                    }}
                    onClick={handleOpenProfessorMenu}
                >
                    Professores
                </Button>
                <Menu
                    anchorEl={anchorElProfessor}
                    open={Boolean(anchorElProfessor)}
                    onClose={handleCloseProfessorMenu}
                >
                    <MenuItem
                        onClick={
                            ()=>{
                                handleCloseProfessorMenu()
                                alert("Carregando outra página")
                            }
                        }
                    >
                        <Typography>Cadastrar</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography>Listar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                        <AdbIcon
                            sx={{
                                display: "flex",
                                mr: 1
                            }}
                        />
                        <Typography
                            variant = "h5"
                            component = "a"
                            href="/"
                            sx = {{
                                ml: 1,
                                fontFamily: "monospace",
                                fontWeight: "bold",
                                letterSpacing: ".2rem",
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            CRUD V1
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                ml: 3
                            }}
                        >
                            {profDropMenu()}
                            <Button
                                sx={{
                                    my: 2, color: "white"
                                }}
                            >
                                Alunos
                            </Button>
                            <Button
                                sx={{
                                    my: 2, color: "white"
                                }}
                                onClick={()=>alert("Clicou em sobre!")}
                            >
                                Sobre
                            </Button>
                        </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MyMenuV1