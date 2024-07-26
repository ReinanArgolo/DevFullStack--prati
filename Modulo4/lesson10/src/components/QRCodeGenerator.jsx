import { useState } from "react";
import QRcode from "qrcode.react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
`

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    border-radius: 10px;
    height: 400px;
    background-color: rgb(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
`

const Title = styled.h2`
    font-size: 3rem;
    color: #333;
    text-align: center;
    margin: 0;
`

const Input = styled.input`
    padding: 10px;
    width: 50%;
    margin: 10px;
`

const QRContainer = styled.div`
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
`

const Button = styled.button`    
    padding: 10px;
    width: 50%;
    margin: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`


const QRCodeGenerator = () => {

    const [text, setText] = useState("")
    const navigate = useNavigate()


    return (
        <Container>
            <AppContainer>
                <Title>QR Code Generator</Title>

                <Input value={text} onChange={ (e) => setText(e.target.value)} />

                <QRContainer>
                    <QRcode value={text} size={150}/>
                </QRContainer>

            </AppContainer>

            <Button onClick={() => navigate('/home')}>Home</Button>

        </Container>
    )
}

export default QRCodeGenerator