import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
    return (

        < HeaderContainer >
            <Logo>
                <Link to={"/"}>
                    <img src="/undraw_flower.svg" alt="imageMenu" />
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
   position:fixed;
   width:100%;
   min-height:70px;
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
    font-size: 40px;
`
const Menu = styled.div`  
   a:hover{
    color:var(--softwhite)
   }
   font-size: 30px;
   
`