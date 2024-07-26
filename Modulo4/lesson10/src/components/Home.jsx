import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    background-image: url(https://img.freepik.com/free-photo/realistic-phone-with-social-media_23-2151459589.jpg?t=st=1721871521~exp=1721875121~hmac=7b568295d73e086d78acb5e08672eb9d0f99b0c37a0fedf38a2a4a27303a80e2&w=826);
    backgrund-repeat: no-repeat;
    background-size: 100%;
    align-items: center;
    justify-content: left;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
`;  

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    border-radius: 10px;
    margin: 50px;
    height: 400px;
    background-color: rgb(50, 170, 223, 0.5);
    box-shadow: 0 0 10px #000;
    backdrop-filter: blur(10px);
`;

const Title = styled.h2`
    font-size: 3rem;
    color: #333;
    text-align: center;
    margin: 0;
`;

const Button = styled.button`
    padding: 10px;
    margin: 10px;
    width: 300px;
    border-radius: 10px;
    border: 1px solid #333;
    cursor: pointer;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: none;
    transition: all 0.5s ease;
    
    &:hover {
        scale: 1.1;
        box-shadow: 0 0 10px #000;
    }
`;


const Home = () => {
    const navigate = useNavigate();

    return (

        <Container>
            <AppContainer>
                <Title>Home</Title>
                <Button onClick={() => navigate('/translate')}>Transtale</Button>
                <Button onClick={() => navigate('/ipFinder')}>Ip Finder</Button>
                <Button onClick={() => navigate('/qrCode')}>QR COde</Button>
                <Button onClick={() => navigate('/movieSearch')}>Movie Search</Button>
            </AppContainer>
        </Container>
        
    )
}

export default Home