import * as React from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {

    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Kino
                    </Typography>
                    <MenuIcon/>
                </Toolbar>
            </AppBar>

    );
}