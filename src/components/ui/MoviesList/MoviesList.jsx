import React from 'react';
import {Pagination, Stack} from "@mui/material";
import MovieCard from "../MovieCard/MovieCard.jsx";

function MoviesList({movies, totalPages, page, setPage}) {

    console.log(totalPages);
    return (
        <>
            <Stack direction="row" justifyContent="center" flexWrap="wrap">
                {movies.map(movie => (
                    <MovieCard key={movie.kinopoiskId} movie={movie} />
                ))}
            </Stack>
            <Stack alignItems="center">
                <Pagination
                    count={totalPages}
                    variant="outlined"
                    shape="rounded"
                    size="large"
                    page={page}
                    onChange={(_, value) => setPage(value)}
                />
            </Stack>
        </>
    );
}

export default MoviesList;