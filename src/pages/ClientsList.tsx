import styled from "styled-components"
import idealClients from "../assets/clientsInfo"
import ClientsCard from "./ClientsCard"

export default function ClientsList() {
    return (
        <MainContainer>
            <h1>Pegue as informações do seu cliente aqui!</h1>
            <ClientsContainer>
                {idealClients.map((array) =>
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
    min-height: 460px;

    h1{
        font-family: 'Bitter';
        font-size: 40px;
    }
`
const ClientsContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`