import styled from "styled-components";
import { IoPlay } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/virtual';

const Container = styled.div``;

const ContainerTopPage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/HODO4UI5VZHNFORSL3SQGXCP2Q.jpg?auth=e4ba1c30f6b042450171e4fe5513b2cd66f572d9341ce017be5407f06eb5a7f9&width=1280&height=720');
    background-size: cover;
    background-position: center;
`;

const Title = styled.div`
    width: 580px;
    padding: 150px 50px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Img = styled.img`
    width: 100%;
`;

const ImgContainer = styled.div`
    height: 280px;
    overflow: hidden;
`;

const Button = styled.button`
    color: #000;
    width: 80px;
    margin: 0 50px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
`;

const DescriptionTop = styled.p`
    margin: 0 50px;
    color: #fff;
    font-size: 18px;
    opacity: 10;
`;

const Popular = styled.div`
    padding: 50px 50px;
`;

const TitleContainer = styled.div`
    margin-bottom: 20px;
`;

const TitlePopular = styled.h2`
    color: #fff;
    font-size: 24px;
`;

const MoviesContainer = styled.div`
    margin: 10px;
`;

const PopularMovie = styled.div`
    background-image: url(${props => `https://image.tmdb.org/t/p/w500${props.backPath}`});
    background-size: cover;
    background-position: center;
    height: 180px;
    width: 290px;
    position: relative;
    margin-inline: 10px;
    border-radius: 5px; 

    
`;

const MovieTitle = styled.h3`
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    padding: 10px 0;
    margin: 0;
`;

const SwiperSlideStyled = styled(SwiperSlide)`
  width: 300px;
  height: 400px;
`;



const API_KEY = import.meta.env.VITE_TMDB_APIKEY;

export default function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`)
            .then(res => {
                setFilmes(res.data.results);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container>
            <ContainerTopPage>
                <Title>
                    <ImgContainer>
                        <Img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/dgver0j-d5f2afb9-29da-46ec-b41b-520f09536229.png/v1/fill/w_1193,h_670/deadpool_and_wolverine_logo_png_hd_2024_by_andrewvm_dgver0j-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjkyIiwicGF0aCI6IlwvZlwvYTU4YTc3MTktMGRjZi00ZTBiLWI3YmItZDJiNzI1ZGJiYjhlXC9kZ3ZlcjBqLWQ1ZjJhZmI5LTI5ZGEtNDZlYy1iNDFiLTUyMGYwOTUzNjIyOS5wbmciLCJ3aWR0aCI6Ijw9MTIzMiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.yc6ldo1gRSYm1bwUFuxQ7OOTvG4ixMHv-a0CJgHhAGE" />
                    </ImgContainer>
                    <DescriptionTop>Wolverine está se recuperando quando cruza seu caminho com Deadpool. Juntos, eles formam uma equipe e enfrentam um inimigo em comum.</DescriptionTop>
                    <Button> < IoPlay color="#000" />Assistir</Button>
                </Title>

                <Popular>
                    <TitleContainer><TitlePopular>Popular on Netflix</TitlePopular></TitleContainer>

                    <MoviesContainer>

                        <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={4} virtual>
                            {filmes &&
                                filmes.map((filme) => (
                                    <SwiperSlide key={filme.id} virtualIndex={5}>
                                        <PopularMovie backPath={filme.backdrop_path}>
                                            <MovieTitle>{filme.title}</MovieTitle>
                                        </PopularMovie>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </MoviesContainer>
                </Popular>
            </ContainerTopPage>
        </Container>
    );
}