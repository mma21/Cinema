import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Layout.jsx";
import Movies from "./pages/Movies";
import MoviesDetail from "./pages/MoviesDetail";
import ActorDetail from "./pages/ActorDetail";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Movies />
                },
                {
                    path: "/movie/:id",
                    element: <MoviesDetail />
                },
                {
                    path: "/actor/:id",
                    element: <ActorDetail />
                }
            ]
        },

    ]);

    return (<RouterProvider router={router}/>)
}

export default App
