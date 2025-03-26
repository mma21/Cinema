import {Link, Stack} from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper-custom.css'

import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import useMoviesQuery from '../../../hooks/useMoviesQuery';
import ErrorMessage from "../../ui/ErrorMessage/index.js";
import MoviesSkeleton from "./MoviesSceleton.jsx";

export default function Movies() {
    const {
        isLoading,
        hasError,
        responsePopular,
        responseBest,
        responseFilms,
        responseSerials,
        responseCartoons,
    } = useMoviesQuery();

    if (isLoading) return <MoviesSkeleton/>;
    if (hasError) return <ErrorMessage/>;

    const serializeDataForCarousel = (data) =>
        data.map(row => (
            <SwiperSlide key={row.kinopoiskId}>
                <RouterLink to={`/movie/${row.kinopoiskId}`}>
                    <img
                        src={row.posterUrlPreview}
                        alt="Movie Poster"
                        style={{
                            width: '200px',
                            height: 'auto',
                            borderRadius: '10px',
                            objectFit: 'cover',
                        }}
                    />
                </RouterLink>
            </SwiperSlide>
        ));


    const carouselArr = [
        {
            title: 'Популярные фильмы',
            url: '/popular',
            data: serializeDataForCarousel(responsePopular.data.items),
        },
        {
            title: 'Лучшие фильмы',
            url: '/best',
            data: serializeDataForCarousel(responseBest.data.items),
        },
        {
            title: 'Фильмы',
            url: '/films',
            data: serializeDataForCarousel(responseFilms.data.items),
        },
        {
            title: 'Сериалы',
            url: '/serials',
            data: serializeDataForCarousel(responseSerials.data.items),
        },
        {
            title: 'Мультфильмы',
            url: '/cartoons',
            data: serializeDataForCarousel(responseCartoons.data.items),
        },
    ];

    return (
        <>
            {carouselArr.map((carousel) => (

                <Stack key={carousel.title}>
                    <Link
                        variant="h4"
                        component={RouterLink}
                        to={carousel.url}
                        sx={{
                            mt: 2,
                            mb: 2,
                            color: "black",
                            textDecoration: "none"
                        }}
                    >
                        {carousel.title}
                    </Link>
                    <Swiper
                        breakpoints={{
                            1200: { slidesPerView: 5 },
                            900: { slidesPerView: 3 },
                            576: { slidesPerView: 2 },
                            0: { slidesPerView: 1 }
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation
                        modules={[Navigation, Autoplay]}
                        className="custom-swiper"
                        spaceBetween={5}
                    >
                        {carousel.data}
                    </Swiper>


                </Stack>
            ))}
        </>
    );
}
