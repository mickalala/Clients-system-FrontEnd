import styled from "styled-components"

export default function HomePage() {
    return (
        <HomeContainer>

            <TextHome>
                <h1>Bem-vindo!</h1>
                <p>Gerencie aqui seus clientes</p>
                <p>Por uma vida mais limpa e organizada 🌱​.​</p>
            </TextHome>
            <PictureHome>
                <img src="/undraw_environmental.svg" alt="imageHome" />
            </PictureHome>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    background-color:var(--lightpurple);
    margin:20px;  
    width: auto ;
    min-height: 460px;
    display:flex;
    align-items:center;
    justify-content: space-around;
   
`

const TextHome = styled.div`
  padding:30px;
  line-height:40px;
    h1{
        font-family: 'Pacifico';
        font-size: 60px;
        margin:14px;
    }
    p{
        font-size: 24px;

    }
`
const PictureHome = styled.div`
    img{
        height:300px;
    }
`