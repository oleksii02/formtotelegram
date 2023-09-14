import React from 'react';
import './CleaningButton.css'
import {Button} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import house from '../imgs/home.svg'
import lounge from '../imgs/lounge.svg'
import office from '../imgs/office.svg'


function CleaningButton(props) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#003156',
            },

        },
    });
    return (
        <ThemeProvider theme={theme}>

            <Box className={'CleaningButton'}>
                <Button variant="outlined">
                    <img src={house} alt={'house'}/>
                    <span className={'span__name'}><h6>
                        House<br/>cleaning
                    </h6></span>

                </Button>
                <Button variant="outlined">
                    <img src={lounge} alt={'lounge'}/>
                    <span className={'span__name'}><h6>
                        Apartment<br/>cleaning
                    </h6></span>

                </Button>
                <Button variant="outlined">
                    <img src={office} alt={'office'}/>
                    <span className={'span__name'}><h6>Office<br/>cleaning</h6></span>

                </Button>
            </Box>
        </ThemeProvider>
    );
}

export default CleaningButton;
