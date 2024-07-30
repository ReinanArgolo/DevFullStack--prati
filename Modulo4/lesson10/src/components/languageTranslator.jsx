import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url(https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?w=826&t=st=1721692592~exp=1721693192~hmac=7157fbda12f4dc648c4bc3092dc294e50ead8bb74ec40dfcc022b3e5a610e72c);
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
`;

const Title = styled.h2`
    font-size: 3rem;
    color: #333;
    text-align: center;
`;

const Label = styled.label`
   color: #555;
   margin: 10px;
`;

const TranslatedText = styled.p`
    font-size: 2rem;
    color: #333;
`;

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 50%;
    background-color: aliceblue;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.2); 
    backdrop-filter: blur(3px); 
    background-blend-mode: overlay;
`;

const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #333;
    background-color: #fff;
    cursor: pointer;
`;

const LanguageTranslator = () => {
    const [text, setText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [sourceLanguage, setSourceLanguage] = useState("EN");
    const [targetLanguage, setTargetLanguage] = useState("PT");

    const translateText = async () => {
        try {
            await translator
                .translateText(text, sourceLanguage, targetLanguage)
                .then((result => {
                    console.log(result.text)
                    setTranslatedText(response.data.responseData.translatedText)

                }))
    
        } catch {
            console.error("Error", error)
        }
    }

    const navigate = useNavigate();

    return (
        <Container>
            <AppContainer>
            <Title> Language Translator </Title>

            <div>
                <Label htmlFor=""> Source Language: </Label>
                <select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
                    <option value="EN">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="pt">Portuguese</option>
                </select>
        
                <Label>Target Language: </Label>
                <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="PT">Portuguese</option>
                </select>
            </div>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to translate"
            />

            <button onClick={translateText}>Translate</button>

            {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
            </AppContainer>

            <Button onClick={() => navigate('/home')}>Home</Button>
        </Container>
    );
};

export default LanguageTranslator;
