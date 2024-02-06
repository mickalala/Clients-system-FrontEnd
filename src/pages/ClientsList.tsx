import styled from "styled-components"
import ClientsCard from "./ClientsCard"
import axios from "axios"
import { useEffect, useState } from "react"

export default function ClientsList() {

    const [clientsA, setClients] = useState([]);
    const [form, setForm] = useState({ value: "" })

    useEffect(() => {
        axios.get(`https://clientserviceapi.onrender.com/clients`)
            .then((answer) => {
                console.log(answer.data)
                setClients(answer.data)
            }).catch((error) => console.log(error))
    }, [])

    function handleForm(e: any) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    function sendForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        // let filter = prompt("Qual filtro(username, phone, email) você está utilizando?")
        axios.get(`https://clientserviceapi.onrender.com/filter`,)
            .then((ans) => {
                console.log(ans)
            }).catch(err => {
                alert(err.message)
            })
    }
    return (
        <MainContainer>
            <h1>Pegue as informações do seu cliente aqui!</h1>

            <ClientsResearch >
                <input type="text" placeholder="Busque seu cliente"
                    name="value" value={form.value}
                    onChange={handleForm} />
                <ResearchButton onClick={sendForm}>🔍​</ResearchButton>
            </ClientsResearch>

            {clientsA.length === 0 && <p>Ainda não existem clientes cadastrados :'(</p>}
            <ClientsContainer>
                {clientsA.map((array) =>
                    (<ClientsCard key={array.id} array={array} />))}
            </ClientsContainer>

        </MainContainer>
    )
}

const MainContainer = styled.div`
    background-color:var(--lightpurple);
    margin:20px;  
    padding:20px;
    width: auto ;
    height: 460px;

    h1{
        font-family: 'Bitter';
        font-size: 40px;
    }
    box-sizing:border-box;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scrollbar-color: transparent;
`
const ClientsContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    margin-top:40px;
`
const ClientsResearch = styled.form`
    ::placeholder{
        font-size:15px;
    }
    height:20px;
    margin-left:850px;
    
`
const ResearchButton = styled.button`
    background-color:var(--lightblue-purple);
  
`