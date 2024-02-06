import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
    
    return (

        < HeaderContainer >
            <Logo>
                <img src="/undraw_flower.svg" alt="imageMenu" />
                <Link to={"/"}>
                    <h1> lilac</h1>
                </Link>
            </Logo>
            <Menu>
                <Link to={"/clientslist"}> Clientes </Link>
                <Link to={"/registerclient"}> Registro</Link>
            </Menu>
        </ HeaderContainer >

    )
}

const HeaderContainer = styled.header`
   border-radius:5px;
   align-self:center;
   width:100% ;
   min-height:80px;
   background-color:var(--lightblue);
   display: flex;
   justify-content: space-around;
   align-items:center;
   a{
    text-decoration:none;
    color:var(--black)
   }
`
const Logo = styled.div`  
    font-size: 50px;
    display:flex;
`
const Menu = styled.div`  
   a:hover{
    color:var(--softwhite); 
   } 
   a{
    font-size: 26px;
    padding:10px;
    font-family: 'Bitter';
   }   
`