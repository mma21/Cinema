import React from 'react';
import {Stack, Typography} from "@mui/material";

function Footer() {
    return (
        <Stack component='footer' sx={{
            paddingTop: 4,
            paddingBottom: 4,
            flexDirection: { sm: 'row' },
            justifyContent: { sm: 'space-between' },
            alignItems: { sm: 'center' },
            marginTop: 'auto',
        }}>
            <Typography variant={'body2'}>
                &copy; {new Date().getFullYear()} &laquo;cinema&raquo;<br/>
                Данный сайт создан исключительно в обучающих целях. <br/>
                Все права принадлежат правообладателям.
            </Typography>
            <Typography variant={'h4'} color={'primary'}>
                cinema
            </Typography>
        </Stack>
    );
}

export default Footer;