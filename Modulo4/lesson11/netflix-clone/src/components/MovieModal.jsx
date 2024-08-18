import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StarRating from './StarsRating';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  z-index: 5;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 80%;
  height: 80%;
  border-radius: 10px;
  overflow: visible;
  position: relative; 
  border-radius: 5px;
`;

const ImageContainer = styled.div`
  height: 50%;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 5px;
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const InfoContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
  height: 50%;
  overflow-y: auto;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 30px;
  text-align: right;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #000000;

  &:hover {
    color: #424242;
  }
  z-index: 2;
`;

const ActorList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ActorItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ActorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10%;
  margin-right: 10px;
`;

const MovieModal = ({ filme, isOpen, onClose }) => {
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${filme.id}/credits`, {
          params: {
            api_key: import.meta.env.VITE_TMDB_APIKEY,
            language: 'pt-BR', // Ou 'en-US', dependendo da sua preferência
          },
        });
        console.log(response.data)
        setCredits(response.data);
      } catch (error) {
        console.error('Erro ao buscar os créditos do filme:', error);
      }
    };

    if (filme.id) {
      fetchCredits();
    }
  }, [filme.id]);

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ImageContainer style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${filme.backdrop_path})` }}>
          <GradientOverlay />
        </ImageContainer>
        <InfoContainer>
          <h2>{filme.title} ({filme.release_date?.slice(0, 4)})</h2>
          <StarRating rating={filme.vote_average} />
          <p>{filme.overview}</p>

          {credits && (
            <>
              <h3>Elenco:</h3>
              <ActorList>
                {credits.cast.slice(0, 5).map((actor) => (
                  <ActorItem key={actor.id}>
                    <ActorImage src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
                    <p>{actor.name} como {actor.character}</p>
                  </ActorItem>
                ))}
              </ActorList>
            </>
          )}
        </InfoContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default MovieModal;
