import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function IconLabelButtons(props) {
    const { onDelete } = props;

    return (
        <Stack justifyContent="center" direction="row" spacing={2}>
            <Button
                variant="outlined"
                onClick={onDelete}
            >
                Delete
            </Button>
            <Button variant="contained">
                Send
            </Button>
        </Stack>
    );
}

export default IconLabelButtons;