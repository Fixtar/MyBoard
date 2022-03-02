import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" >
                Delete
            </Button>
            <Button variant="contained">
                Send
            </Button>
        </Stack>
    );
}