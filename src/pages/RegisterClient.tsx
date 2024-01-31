import styled from "styled-components";

export default function RegisterClient() {
    return (
        <MainContainer>
            <h1>Registre seu cliente aqui!</h1>
            <MainDiv>
                <ClientForm>
                    <p> Insira aqui o nome do cliente: </p>
                    <input type="text" placeholder="Nome" />
                    <p> Insira aqui o email do cliente: </p>
                    <input type="text" placeholder="Email" />
                    <p> Insira aqui o telefone do cliente: </p>
                    <input type="text" placeholder="Telefone" />
                    <p> Insira aqui o endereço do cliente: </p>
                    <input type="text" placeholder="Endereço" /><br></br>
                    <button >Enviar</button>
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
   }
   button{
    width:100px;
    margin:20px;
    height:30px;
   } 
`