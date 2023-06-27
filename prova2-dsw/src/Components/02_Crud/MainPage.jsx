import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyMenu from "./MyMenuV1.jsx"
import { Container } from "@mui/material"

import Sobre from './Sobre'

// páginas do Professor
import CadastrarProfessor from "./Professor/Cadastrar"
import ListarProfessor from "./Professor/Listar"
import EditarProfessor from "./Professor/Editar"

// páginas do aluno
import CadastrarAluno from "./Aluno/Cadastrar"
import ListarAluno from "./Aluno/Listar"
import EditarAluno from "./Aluno/Editar"
import ListarAlunosAprovados from "./Aluno/ListarAprovados.jsx"

import Login from "../01_Login/Login.jsx"

// tentamos implementar um contexto para o login, mas não tivemos tempo para o fazer de forma satisfatória, então a tentativa apenas fica registrada mesmo
import LoginContext from "../../context/loginContext.jsx"

const MainPage = () => {
    return (
        <BrowserRouter>

            <LoginContext.Provider value={{logado: false}}>

            <MyMenu />
                <Container sx={{mt:4}}>
                    <Routes>
                        <Route path="/sobre" element={<Sobre />}/>

                        {/* para acessar a página de Login, basta ir à página inicial do sistema ou clicar no botão mais à direita na barra */}
                        <Route path="/" element={<Login />}/>
                        <Route path="/login" element={<Login />}/>

                        <Route path="/cadastrarProfessor" element={<CadastrarProfessor />}/>
                        <Route path="/listarProfessores" element={<ListarProfessor />}/>
                        <Route path="/editarProfessor/:id" element={<EditarProfessor />}/>

                        <Route path="/cadastrarAluno" element={<CadastrarAluno />}/>
                        <Route path="/listarAlunos" element={<ListarAluno />}/>
                        <Route path="/listarAlunosAprovados" element={<ListarAlunosAprovados />}/>
                        <Route path="/editarAluno/:id" element={<EditarAluno />}/>
                    </Routes>
                </Container>
            </LoginContext.Provider>
        </BrowserRouter>
    )
}

export default MainPage