import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyMenu from "./MyMenuV1.jsx"
import { Container } from "@mui/material"

import Sobre from './Sobre'

//páginas do Professor
import CadastrarProfessor from "./Professor/Cadastrar"
import ListarProfessor from "./Professor/Listar"
import EditarProfessor from "./Professor/Editar"

//páginas do aluno
import CadastrarAluno from "./Aluno/Cadastrar"
import ListarAluno from "./Aluno/Listar"
import EditarAluno from "./Aluno/Editar"

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx={{mt:4}}>
                <Routes>
                    <Route path="/sobre" element={<Sobre />}/>

                    <Route path="/cadastrarProfessor" element={<CadastrarProfessor />}/>
                    <Route path="/listarProfessor" element={<ListarProfessor />}/>
                    <Route path="/editarProfessor/:id" element={<EditarProfessor />}/>

                    <Route path="/cadastrarAluno" element={<CadastrarAluno />}/>
                    <Route path="/listarAluno" element={<ListarAluno />}/>
                    <Route path="/editarAluno" element={<EditarAluno />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage