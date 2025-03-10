import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Container,
    Divider,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Slide,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger,
} from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';


import {TOP_LISTS, MOVIE_LISTS, iconComponents} from "../../../constans.js";

const Icon = ({ iconName }) => {
    const IconComponent = iconComponents[iconName];
    return <IconComponent />;
};

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);


    const trigger = useScrollTrigger({
        target: window,
    });

    const handleDrawerToggle = () => {
        setOpen(prevState => !prevState);
    };

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <IconButton color="inherit" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer open={isOpen} onClose={handleDrawerToggle}>
                            <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                                <List>
                                    {TOP_LISTS.map(item => (
                                        <Link key={item.title} component={RouterLink} to={item.url}>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <Icon iconName={item.icon} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item.title} />
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>
                                <Divider />
                                <List>
                                    {MOVIE_LISTS.map(item => (
                                        <Link key={item.title} component={RouterLink} to={item.url}>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <Icon iconName={item.icon} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item.title} />
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                        <Stack
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                            width="100%"
                        >
                            <Typography
                                sx={{ color: 'white', textDecoration: 'none' }}
                                component={RouterLink}
                                variant="h4"
                                to="/"
                            >
                                cinema
                            </Typography>

                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
}