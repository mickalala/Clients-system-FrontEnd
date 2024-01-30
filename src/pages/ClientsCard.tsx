import styled from "styled-components";

export default function ClientsCard() {
    return (
        <Card>
            <p>nome:</p>
            <p>email</p>
            <p>telefone:</p>
        </Card>
    )
}

const Card = styled.div`
    border: 2px solid blanchedalmond;
    width:200px;
    background-color: lavenderblush;
`