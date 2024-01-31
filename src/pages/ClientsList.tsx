import styled from "styled-components"
import idealClients from "../assets/clientsInfo"
import ClientsCard from "./ClientsCard"

export default function ClientsList() {
    return (
        <MainContainer>
            <h1>Pegue as informações do seu cliente aqui!</h1>

            <ClientsResearch >
                <input type="text" placeholder="Busque seu cliente" />
                <ResearchButton>🔍​</ResearchButton>
            </ClientsResearch>


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