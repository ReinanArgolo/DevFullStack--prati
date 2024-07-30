import styled from 'styled-components'
import { FaSearch, FaBell } from 'react-icons/fa'
import { BiCaretDown } from "react-icons/bi";


const Container = styled.div`
    display: flex;
    align-items: center;
    background:  linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
`

const Img = styled.img`
    width: 130px;
    padding: 24px;
`

const Links = styled.div`
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

const A = styled.a`
    color: #DADADA;
    text-decoration: none;
    margin: 0;
    
    .active {
        color: #fff;
    }
`

const ActionButtons = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
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




export default function HeaderHome () {
    return (
        <Container style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
            <Img src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt=""/>

            <Links>
                <Ul>
                    <Li><A href="" className='active'>Início</A></Li>
                    <Li><A href="">Series</A></Li>
                    <Li><A href="">Filmes</A></Li>
                    <Li><A href="">Adicionados Recentemente</A></Li>
                    <Li><A href="">Minha Lista</A></Li>
                </Ul>

                <ActionButtons>
                    <Button> <FaSearch size={28}/></Button>
                    <A href=''>Kids</A>
                    <Button> <FaBell size={28}/> </Button>
                    <ProfileContainer>
                        <ProfilePicture src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxV-ZruxQ48Vs0ybng-oiIcBJahDGLddxOFQ&s'/> <Button> < BiCaretDown/></Button>
                    </ProfileContainer>
                </ActionButtons>
            </Links>
        </Container>
    )
}