import React from 'react';
import styled from 'styled-components';
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

const MovieModal = ({ filme, isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
        <ModalContainer>
        <ModalContent>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <ImageContainer style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${filme.backdrop_path})` }}>
            <GradientOverlay />
          </ImageContainer>
          <InfoContainer>
            <h2>{filme.title} ({filme.release_date.slice(0,4)})</h2>
            {/* <p>{filme.genres.map((genre) => genre.name).join(', ')}</p> */}
            <StarRating rating={filme.vote_average} />
            
            <p>{filme.overview}</p>
        
          </InfoContainer>
        </ModalContent>
      </ModalContainer>
    );
  };

export default MovieModal;