import styled from "styled-components";
// import { arrayclients } from "../assets/clientstype";

export default function ClientsCard({ array }: any) {
    return (
        <Card>
            <p><span>nome: </span>{array.username}</p>
            <p><span>email: </span>{array.email}</p>
            <p><span>telefone: </span>{array.phone}</p>
        </Card>
    )
}

const Card = styled.div`
    
    border: 2px solid blanchedalmond;
    border-radius:5px;
    margin:10px;
    width:200px;
    height:200px;
    background-color: var(--whitepurple);
    span{
        font-weight:bold;
    }
`