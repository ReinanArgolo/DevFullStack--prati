import styled from 'styled-components'
import { FaSearch, FaBell } from 'react-icons/fa'
import { BiCaretDown } from "react-icons/bi";
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    align-items: center;
    background:  linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
`

const Img = styled.img`
    width: 130px;
    padding: 24px;
`

const ActionsContainer = styled.div`
    display: grid;
    grid-template-columns: 5fr 1fr;
`

const Ul = styled.ul`
    display: flex;
    gap    : 28px;
`

const Li = styled.li`
    list-style: none;
    
`

const StyledLink  = styled(Link)`
    color: #DADADA;
    text-decoration: none;
    margin: 0;
    
    .active {
        color: #fff;
    }
`

const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 30px;
`
const Button = styled.button`
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    width: 31px;
    height: 31px;
    cursor: pointer;
    outline: none;
`

const ProfilePicture = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 5px;
`

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
`

const Pesquisa = styled.div`
  display: none;
  align-items: center;
  justify-content: end;
  margin: 10px;
  padding: 0;
  gap: 0;
  

  &.ativo {
    display: flex;
    animation: animacao 0.5s forwards;
  }

  &.sair {
    animation: sair 0.5s forwards;
  }

  @keyframes animacao {
    0% {
      width: 0;
      padding: 0;
      border-radius: 0;
    }
    100% {
      width: 800px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
  }

  @keyframes sair {
    0% {
      width: 800px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    100% {
      width: 0;
      padding: 0;
      border-radius: 0;
      display: none;
    }
  }
`

const Input = styled.input`
  width: 90%;
  height: 40px;
  margin: 0;
  border-radius: 5px 0 0 5px;
  border: none;
  padding: 0px 10px;

  &:focus {
    outline: none;
  }
`

const Btn = styled.button`
  width: 10%;
  height: 40px;
  border-radius: 0 5px 5px 0;
  border: none;
  background-color: #333;

  color: #fff;
  cursor: pointer;
  margin: 0;

  &:hover {
    background-color: #444;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0;

  margin: 0;
  width: 100%;
`




export default function HeaderHome() {


    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();


    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/resultado/${searchValue}`);
    };

    const mostrarPesquisa = () => {
        const pesquisa = document.getElementById('barraDePesquisa-conatiner');
        const ul = document.getElementById('categorias');

        if (pesquisa.style.display === 'none') {
            pesquisa.style.display = 'flex';
            pesquisa.classList.add('ativo');
            ul.style.display = 'none';
        } else {
            pesquisa.classList.add('sair');
            setTimeout(() => {
                pesquisa.style.display = 'none';
                pesquisa.classList.remove('ativo');
                pesquisa.classList.remove('sair');
                ul.style.display = 'flex';
            }, 500);
        }

    }
    return (
        <Container style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
            <Link to="/home">
                <Img src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt="" />
            </Link>

            <ActionsContainer id='links-container'>
                <Ul id='categorias'>
                    <Li><StyledLink to={null}>Início</StyledLink></Li>
                    <Li><StyledLink to={null}>Series</StyledLink></Li>
                    <Li><StyledLink to={null}>Filmes</StyledLink></Li>
                    <Li><StyledLink to={null}>Adicionados Recentemente</StyledLink></Li>
                    <Li><StyledLink to={null}>Minha Lista</StyledLink></Li>
                </Ul>

                <Pesquisa id='barraDePesquisa-conatiner'>
                    <Form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            value={searchValue}
                            onChange={handleSearch}
                            placeholder="Pesquisar"
                        />
                        <Btn type="submit">Buscar</Btn>
                    </Form>
                </Pesquisa>

                <ActionButtons>
                    <Button onClick={() => mostrarPesquisa()}> <FaSearch size={28} /></Button>
                    <StyledLink to={null}>Kids</StyledLink>
                    <Button> <FaBell size={28} /> </Button>
                    <ProfileContainer>
                        <ProfilePicture src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxV-ZruxQ48Vs0ybng-oiIcBJahDGLddxOFQ&s' /> <Button> < BiCaretDown /></Button>
                    </ProfileContainer>
                </ActionButtons>
            </ActionsContainer>
        </Container>
    )
}