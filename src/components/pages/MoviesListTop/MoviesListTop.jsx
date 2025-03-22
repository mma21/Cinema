import React from 'react';
import {useGetFilmsTopQuery} from "../../../services/kinopoiskApi.js";
import {TOP_LISTS} from "../../../constans.js";
import {useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {Button, Stack, Typography} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import MoviesList from "../../ui/MoviesList";

function MoviesListTop() {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const location = useLocation();
    const movieType = TOP_LISTS.find(el => el.url === location.pathname);
    const {data, error, isLoading} = useGetFilmsTopQuery({
        type: movieType.value,
        page,
    })
    useEffect(() => {
        setPage(1);
    }, [location]);

    if (error) return <p>Error</p>;

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <Stack flexDirection="row" sx={{ mt: 2, mb: 2 }}>
                <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color={"inherit"} />
                <Typography variant="h4">{movieType.title}</Typography>
            </Stack>
            <MoviesList
                movies={data.items}
                totalPages={data.totalPages}
                page={page}
                setPage={setPage}
            />
        </>
    );
}

export default MoviesListTop;