import { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { GoSearch } from "react-icons/go";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    background: url(https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-repeat: no-repeat;
    background-size: 100%;
` 
const Title = styled.h2`
    font-size: 3rem;
    color: #fff;
    text-align: center;
`
const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`
const Input = styled.input`
    padding: 10px;
    width: 50%;
    border: none;
    border-radius: 50px 0px 0 50px;
    text-align: center;
`
const Button = styled.button`
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 0px 50px 50px 0px;
    height: 35px;
    cursor: pointer;
`
const Movie = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 400px;
    width: 260px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 20px;
    background-repeat: none;
    background-position: center;
    color: #fff;
    transition: all 0.3s ease;
    border: 2px solid #888;

    &:hover {
        transform: scale(1.1);
    }

`

const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
    overflow: auto;
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    place-items: center;
    backdrop-filter: blur(10px);
    background-color: rgba(999, 999, 999, 0.5); 
    border-radius: 5px;
    background-repeat: no-repeat;

    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background: #555;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 5px;
    }
`

const NameData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(51, 51, 51);
    padding: 10px;
    width: 80%;
    border-radius: 30px;
    
    

    h3 {
        margin: 0;
        text-align: center;
    }

    p{
        margin: 0;
    }
`
    

function MovieSearchEngine() {
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const searchMovies = async () => {
        try {
            event.preventDefault()
            const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=d7acb435`)
            setMovies(response.data.Search)
            console.log(response.data.Search)
        } catch (error) {
            console.error("Error", error)
        }
    }

    return (
        <Container>
            <Title>Movie Search Engine</Title>
            
            <SearchForm>
                <Input
                    type="text"
                    placeholder="Search for movies"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button type="submit" onClick={searchMovies}> <GoSearch /> </Button>
            </SearchForm>
                

            <Div>
                {movies && 
                    movies.map((movie) => (
                        <Movie key={movie.imdbID} style={{background: `url(${movie.Poster})`}}>
                            <NameData>
                                <h3>{movie.Title}</h3>
                                <p>{movie.Type} | {movie.Year}</p>
                            </NameData>  
                            
                        </Movie>
                    ))}
            </Div>
        </Container>
    )

                


}

export default MovieSearchEngine