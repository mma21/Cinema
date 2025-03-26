import React from 'react';
import { Alert, AlertTitle, Button, Stack } from '@mui/material';

export default function ErrorMessage({ onRetry }) {
    return (
        <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
            <Alert severity="error" sx={{ maxWidth: 400, textAlign: 'center' }}>
                <AlertTitle>Ошибка загрузки данных</AlertTitle>
                Что-то пошло не так. Попробуйте ещё раз.
            </Alert>
            <Button variant="contained" color="primary" onClick={onRetry}>
                Повторить попытку
            </Button>
        </Stack>
    );
}
