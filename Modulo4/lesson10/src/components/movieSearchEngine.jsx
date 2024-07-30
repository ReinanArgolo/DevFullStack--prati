import { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";



const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    background: url(https://img.freepik.com/free-psd/3d-cinema-blank-banner-background_23-2150822408.jpg?t=st=1721848189~exp=1721851789~hmac=277db0b86210a0ba114fc743c9ff8af30db840e8e18bf669e50c9d9e174b46be&w=826);
    background-repeat: no-repeat;
    background-size: 100%;
` 
const Title = styled.h2`
    font-size: 3rem;
    color: #333;
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
    color: #fff;
    transition: all 0.3s ease;
    border: 2px solid #888;
    background: ${({ posterPath }) => `url(https://image.tmdb.org/t/p/w200${posterPath})`} no-repeat;
    background-size: cover; 

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
    background-color: rgba(0, 0, 0, 0.5); 
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
    const navigate = useNavigate()
    const API_KEY = import.meta.env.VITE_TMDB_APIKEY
    console.log(API_KEY)

    const searchMovies = async () => {
        try {
            event.preventDefault()
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
            setMovies(response.data.results)
            console.log(response.data.results)
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
                        <Movie key={movie.imdbID} posterPath={movie.poster_path}>
                            <NameData>
                                <h3>{movie.original_title}</h3>
                                <p>{movie.Type} | {movie.release_date}</p>
                            </NameData>  
                            
                        </Movie>
                    ))}
            </Div>

            <Button onClick={() => navigate('/home')}>Home</Button>

        </Container>
    )

                


}

export default MovieSearchEngine