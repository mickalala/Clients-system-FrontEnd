import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"


export default function Routediv() {

    const [route, setRoute] = useState([]);
    const [distance, setDistance] = useState();
    const [open, setOpen] = useState(false)

    useEffect(() => {
        axios.get(`https://clientserviceapi.onrender.com/distance`)
            .then((answer) => {
                setRoute(answer.data.stops)
                console.log(answer.data)
                setDistance(answer.data.totalDistance)
            }).catch((error) => console.log(error))
    }, [])

    return (
    <>
        <button onClick={()=>setOpen(!open)}> Calcular rota</button>
       {open==true && <MainContainer >
            <h1>Rota calculada da primeira parada até a ultima antes de voltar à sede:</h1>
            {route.map((s) =>
                (<p>*{s}</p>)
            )}
            <p>distância percorrida: {distance}</p>
        </MainContainer>
        }
        </>
    )
}

const MainContainer = styled.div`
    z-index:1;
    background-color:var(--softwhite);
    height:300px;
    width:500px;
    position: absolute;
    top: 50%;
    left:50%;
    box-shadow: 24;
    align-self:center;
   
`