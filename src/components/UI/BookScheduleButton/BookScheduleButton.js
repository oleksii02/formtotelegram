import React from 'react';
import {Button} from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import Box from "@mui/material/Box";


function BookScheduleButton(props) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#003156',
            },

        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    '& .MuiButtonBase-root': {
                        width: '236px',
                        height: '53px',
                        padding: '15px 35px',
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 500,
                }
                }}
            ><a href={'#form'}>
                <Button

                    color={'primary'}
                    variant="contained">
                    <EditCalendarOutlinedIcon/>
                    &nbsp;Book Schedule
                </Button>
            </a>
            </Box>
        </ThemeProvider>
    );
}

export default BookScheduleButton;
