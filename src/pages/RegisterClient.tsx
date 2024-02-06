import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function RegisterClient() {

    const [form, setForm] = useState({ username: "", phone: "", email: "", coordx: "", coordy: "" })
    function handleForm(e: any) {
        console.log(e.target.name)
        if (e.target.name == "addresscoordinates") {
            e.currentTarget.maxLength = 3;
            setForm({ ...form, [e.target.name]: e.target.value })
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }

    }

    function sendForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        axios.post(`https://clientserviceapi.onrender.com/registerclient`, form)
            .then(() => {
                setForm({ username: "", phone: "", email: "", coordx: "", coordy: "" })
            }).catch(err => {
                alert(err.message)
            })
    }
    return (
        <MainContainer>
            <h1>Registre seu cliente aqui!</h1>
            <MainDiv>
                <ClientForm>
                    <p> Insira o nome do cliente: </p>
                    <input type="text" placeholder="Nome"
                        name="username" value={form.username}
                        onChange={handleForm} required />
                    <p> Insira o email do cliente: </p>
                    <input type="email" placeholder="Email"
                        name="email" value={form.email}
                        onChange={handleForm} required />
                    <p> Insira o telefone do cliente: </p>
                    <input type="text" placeholder="Telefone"
                        name="phone" value={form.phone}
                        onChange={handleForm} required />
                    <p> Insira as coordenadas do cliente: </p>
                    <CoordInput type="number" placeholder="Coordenada X"
                        name="coordx" value={form.coordx}
                        onChange={handleForm} />
                    <CoordInput type="number" placeholder="Coordenada Y"
                        name="coordy" value={form.coordy}
                        onChange={handleForm} />
                    <br></br>
                    <button onClick={sendForm}>Enviar</button>
                </ClientForm>
            </MainDiv>
        </MainContainer>

    )
}

const MainContainer = styled.div`
    background-color:var(--lightpurple);
    margin:20px;  
    padding:20px;
    width: auto ;
    min-height: 460px;
   
    h1{
        font-family: 'Bitter';
        font-size: 40px;
    }
`
const MainDiv = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   background-color:var(--whitepurple);
   width:400px;
   p{
      font-size:25px;
      font-style:bold;
   }
 
`
const ClientForm = styled.form`
   input{
    height:50px;
    width:200px;
    font-size:15px;
    border-radius:5px;
    border-color:transparent;
    margin:10px;
   }
   button{
    width:100px;
    margin:20px;
    height:30px;
   } 
`
const CoordInput = styled.input`
    width:80px;  
`