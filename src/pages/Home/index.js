import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom"; 
import axios from "axios";

import Image1 from "../../assets/image-1.svg";
import Arrow from "../../assets/arrow.svg";

import ContainerItens from "../../components/ContainerItens"
import H1 from "../../components/Title"
import Button from "../../components/Button";
import { Container, Img, Label, Input } from "./style";

function App() {
    const [users, setUsers] = useState([]);
    const inputName = useRef();
    const inputAge = useRef();
    const history = useHistory();

    async function addNewUser() {
        const { data: newUser } = await axios.post("http://localhost:3001/users", {
            name: inputName.current.value,
            age: inputAge.current.value
        })
        setUsers([...users, newUser])

        history.push("/usuarios")
    }

    return (
        <Container>
            <Img src={Image1} alt="duas pessoas sentadas em sofás" />
            <ContainerItens>
                <H1>Olá!</H1>
                <Label>Nome:</Label>
                <Input ref={inputName} placeholder="Seu nome" />
                <Label>Idade:</Label>
                <Input ref={inputAge} placeholder="Sua idade" />
                <Button onClick={addNewUser}>Cadastrar <img src={Arrow} alt="seta" /></Button>
            </ContainerItens>
        </Container>
    );

}

export default App;