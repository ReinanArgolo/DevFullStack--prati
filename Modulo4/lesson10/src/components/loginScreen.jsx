import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
`;

const Title = styled.h2`
    font-size: 3rem;
    color: #fff;
    text-align: center;
`; 

const Label = styled.label`
   color: #555;
`;

const Input = styled.input`
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid #333;
`;

const Button = styled.button`
    padding: 10px;
    margin: 10px;
    width: 50%;
    border-radius: 10px;
    border: 1px solid #333;
    background-color: #333;
    color: #fff;
    cursor: pointer;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
`;

const LoginApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    border-radius: 10px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
`;

const LoginScreen = ({ setIsLogged }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        const USER = 'admin';
        const DEFAULT_PASSWORD = 'admin';

        if (username === USER && password === DEFAULT_PASSWORD) {
            alert('Login successful');
            setIsLogged(true); 
            navigate('/home'); 
        } else {
            alert('Login failed');
        }
    };

    return (
        <Container>
            <LoginApp>
                <Title>Login</Title>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} />
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit">Login</Button>
                </Form>
            </LoginApp>
        </Container>
    );
};

export default LoginScreen;
