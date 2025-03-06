import React from 'react';
import {Container} from "@mui/material";
import {Outlet} from "react-router-dom";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

function Layout() {
    return (
        <Container fixed>
            <Navbar />
            <Outlet/>
            <Footer />
        </Container>
    );
}

export default Layout;