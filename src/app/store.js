import { configureStore } from '@reduxjs/toolkit'
import currentSlice from '../features/CurrentSlice.js'
import {kinopoiskApi} from "../services/kinopoiskApi.js";

export const store = configureStore({
    reducer: {
        [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
        currentSlice: currentSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(kinopoiskApi.middleware)
})