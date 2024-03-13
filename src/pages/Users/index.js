import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; 

import axios from "axios";

import Image2 from "../../assets/image-2.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"

import ContainerItens from "../../components/ContainerItens"
import H1 from "../../components/Title"
import Button from "../../components/Button";
import { Container, Img, User } from "./style"

function Users() {
    const [users, setUsers] = useState([]);
    const history = useHistory()

    useEffect(() => {
        async function fetchUsers() {
            const { data: newUsers } = await axios.get("http://localhost:3001/users");
            setUsers(newUsers);
        }
        fetchUsers()
    }, [])

    async function deleteUser(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`)
        const newUser = users.filter(user => user.id !== userId)
        setUsers(newUser)
    }

    function goBackPage() {
        history.push('/')
    }

    return (
        <Container>
            <Img src={Image2} alt="avatar de três pessoas" />
            <ContainerItens isBlur={true}>
                <H1>Usuários</H1>
                <ul>
                    {users.map((user) => (
                        <User key={user.id}>
                            <p>{user.name}</p> <p>{user.age}</p>
                            <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata-de-lixo" /></button>
                        </User>
                    ))}
                </ul>
                <Button isTransparent={true} onClick={goBackPage} ><img src={Arrow} alt="seta"/>Voltar</Button>
            </ContainerItens>
        </Container>
    );

}

export default Users;