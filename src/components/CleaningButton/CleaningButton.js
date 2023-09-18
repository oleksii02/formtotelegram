import React from 'react';
import './CleaningButton.css'
import {Button} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import house from '../imgs/home.svg'
import lounge from '../imgs/lounge.svg'
import office from '../imgs/office.svg'
import { Link } from 'react-router-dom'



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
                <a href={'#regular-cleaning'}>
                    <Button variant="outlined">
                        <img src={house} alt={'house'}/>
                        <span className={'span__name'}><h6>
                        House<br/>cleaning
                    </h6></span>

                    </Button>
                </a>
                <a href={'#cleaning-after'}>
                    <Button variant="outlined">
                        <img src={lounge} alt={'lounge'}/>
                        <span className={'span__name'}><h6>
                        Apartment<br/>cleaning
                    </h6></span>

                    </Button>
                </a>
                <a href={'#office-cleaning'}>
                        <Button variant="outlined"
                                to={'#office-cleaning'}
                        >
                            <img src={office} alt={'office'}/>
                            <span className={'span__name'}><h6>Office<br/>cleaning</h6></span>

                        </Button>
                </a>
            </Box>
        </ThemeProvider>
    );
}

export default CleaningButton;
