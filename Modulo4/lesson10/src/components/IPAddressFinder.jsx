import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    background: url(https://img.freepik.com/premium-vector/abstrackt-background-matrix-style_92218-33.jpg?w=900);
    background-size: 100%; ;
`;

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    border-radius: 10px;
    height: 600px;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
`;

const Title = styled.h2`
    font-size: 3rem;
    color: #fff;
    text-align: center;
    margin: 0;
`;

const Input = styled.input`
    padding: 10px;
    width: 50%;
    margin: 10px;
`;

const Button = styled.button`
    padding: 10px;
    width: 50%;
    margin: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const IPContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    border-radius: 10px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
`;

const P = styled.p`
    color: #fff;
    text-align: left;
    margin: 5px;
`;

const IpFinder = () => {
    const [ip, setIp] = useState("");
    const [ipData, setIpData] = useState({});
    const [error, setError] = useState({});

    const getIpData = async () => {

        if (!isValidIP(ip)) {
            setError({ message: "Por favor, insira um IP válido" });
            return;
        }
        else {
            setError({})
            try {
                const response = await axios.get(`https://ipinfo.io/${ip}/json`);
                setIpData(response.data);
            } catch (error) {
                console.error("Error", error);
            }
        }
    };

    const isValidIP = (ip) => {
        const regex = /\b((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\b/;
        return regex.test(ip);
    }

    const navigate = useNavigate();

    return (
        <Container>
            <AppContainer>
                <Title>IP Address Finder</Title>

                <Input type="text" value={ip} onChange={(e) => setIp(e.target.value)} />
                {error && <P style={{ color: "red" }}>{error.message}</P>}
                <Button onClick={getIpData}> <GoSearch /> </Button>

                <IPContainer>
                    <P>IP: {ipData.ip}</P>
                    <P>CIdade: {ipData.city}</P>
                    <P>Região: {ipData.region}</P>
                    <P>País: {ipData.country}</P>
                    <P>Provedor: {ipData.org}</P>
                    <P>Time Zone: {ipData.timezone}</P>
                </IPContainer>

            </AppContainer>

            <Button onClick={() => navigate('/home')}>Home</Button>

        </Container>
    );
};

export default IpFinder;
