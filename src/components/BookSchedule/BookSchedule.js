import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from "@mui/material/InputLabel";
import {Button, FormControl} from "@mui/material";
import './BookSchedule.css'
import {useState} from "react";
import {sendMessage} from "../../api/bookSchedule.ts";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer, DemoItem} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";

import dayjs from 'dayjs';
import {renderTimeViewClock, TimePicker} from "@mui/x-date-pickers";


const today = dayjs();


const service_list = [
    {
        value: 6,
        label: 'Regular Cleaning',
    },
    {
        value: 5,
        label: 'After Repair',
    },
    {
        value: 1,
        label: 'Office/ Commercial',
    },
    {
        value: 2,
        label: 'Move-in/ Move-out',
    },
    {
        value: 3,
        label: 'Deep Cleaning',
    },
    {
        value: 4,
        label: 'Basic Cleaning',
    },
];
const squareFootage_list = [
    {
        value: 1,
        label: '200 Sq Ft - 400 Sq Ft'
    },
    {
        value: 2,
        label: '400 Sq Ft - 600 Sq Ft'
    },
    {
        value: 3,
        label: '600 Sq Ft - 800 Sq Ft'
    },
    {
        value: 4,
        label: '800 Sq Ft - 1500 Sq Ft'
    },
];
const bedrooms_list = [
    {
        value: 1,
        label: '1 Bedrooms'
    },
    {
        value: 2,
        label: '2 Bedrooms'
    },
    {
        value: 3,
        label: '3 Bedrooms'
    },
    {
        value: 4,
        label: '4 Bedrooms'
    },
];
const bathrooms_list = [
    {
        value: 1,
        label: '1 Bathrooms'
    },
    {
        value: 2,
        label: '2 Bathrooms'
    },
    {
        value: 3,
        label: '3 Bathrooms'
    },
    {
        value: 4,
        label: '4 Bathrooms'
    },
];

export default function BookSchedule() {

    const [service, setService] = useState('')
    const [squareFootage, setSquareFootage] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const [bathrooms, setBathrooms] = useState('')
/*    const [serviceDirty, setServiceDirty] = useState(false)
    const [squareFootageDirty, setSquareFootageDirty] = useState(false)
    const [bedroomsDirty, setBedroomsDirty] = useState(false)
    const [bathroomsDirty, setBathroomsDirty] = useState(false)*/

    const theme = createTheme({
        palette: {
            primary: {
                main: '#003156',
            },

        },
    });


    const serviceHandler = (e) => {
        setService(e.target.value)

    }
    const squareFootageHandler = (e) => {
        setSquareFootage(e.target.value)

    }
    const bedroomsHandler = (e) => {
        setBedrooms(e.target.value)

    }
    const bathroomsHandler = (e) => {
        setBathrooms(e.target.value)

    }

    const handleSubmit = async (values) => {
        console.log('dsfsdfdsf')
        const message =
            `New order!!!${'%0A'}Type of Service: ${service} ${'%0A'}Total Square Footage: ${squareFootage} ${'%0A'}Bedrooms: ${bedrooms} ${'%0A'}Bathrooms: ${bathrooms}`
        await sendMessage(message)
        console.log('dsfsdfdsf')


    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                id={'form'}
                className={'form'}
                component="form"
                sx={{
                    margin: '0 auto 50px',
                    textAlign: 'center',
                    '& .MuiTextField-root': {m: 1, margin: '0', textAlign: 'left', width: '100%'},
                    '& .MuiFormControl-root': {padding: '10px 8px 8px',},
                    '& .MuiInputLabel-root': {
                        marginBottom: '10px'
                    },
                    '& .MuiStack-root': {padding: '0', width: '100%'}
                }}
                noValidate
                autoComplete="off"
            >
                <div><h3>Book your cleaning 2 minutes!</h3></div>

                <div>
                    <FormControl
                        className={'width60ch'}

                    >
                        <InputLabel shrink htmlFor="bootstrap-input" size='medium'>
                            <h4 className={'form_name'}>Name</h4>
                        </InputLabel>
                        <TextField
                            multiline
                            id="outlined-textarea"
                            placeholder="Jones Williams"
                            onChange={e => serviceHandler(e)}
                        >
                        </TextField>
                    </FormControl>
                    <FormControl
                        className={'width60ch'}
                    >
                        <InputLabel shrink htmlFor="bootstrap-input">
                            <h4 className={'form_name'}>Phone</h4>
                        </InputLabel>
                        <TextField
                            id="outlined-select-currency"
                            multiline
                            type="tel"
                            placeholder="+1 (331) 313-7082"
                            onChange={e => squareFootageHandler(e)}
                        >


                        </TextField>

                    </FormControl>
                </div>
                <div>
                    <FormControl
                        className={'width60ch'}
                    >
                        <InputLabel shrink htmlFor="bootstrap-input" size='medium'>
                            <h4 className={'form_name'}>Type of Service</h4>
                        </InputLabel>
                        <TextField
                            fullWidth
                            name='Type of Service'
                            id="outlined-select-currency"
                            select
                            placeholder="Placeholder"
                            defaultValue="Placeholder"
                            onChange={e => serviceHandler(e)}

                        >

                            <MenuItem disabled value="Placeholder">
                                <em>Placeholder</em>
                            </MenuItem>
                            {service_list.map((option) => (
                                <MenuItem key={option.value} value={option.label}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                    <FormControl
                        sx={{
                            padding:'0 !important',
                        }}>
                        <div style={{display:'flex'}}>
                            <FormControl
                                className={'width30ch'}
                                >
                                <InputLabel shrink htmlFor="bootstrap-input">
                                    <h4 className={'form_name'}> Bedrooms</h4>
                                </InputLabel>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    defaultValue="Placeholder"
                                    onChange={e => bedroomsHandler(e)}
                                >
                                    <MenuItem disabled value="Placeholder">
                                        <em>Placeholder</em>
                                    </MenuItem>

                                    {bedrooms_list.map((option) => (
                                        <MenuItem key={option.value} value={option.label}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </FormControl>
                            <FormControl
                                className={'width30ch'} >
                                <InputLabel shrink htmlFor="bootstrap-input">
                                    <h4 className={'form_name'}> Bathrooms</h4>
                                </InputLabel>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    defaultValue="Placeholder"
                                    onChange={e => bathroomsHandler(e)}
                                >
                                    <MenuItem disabled value="Placeholder">
                                        <em>Placeholder</em>
                                    </MenuItem>

                                    {bathrooms_list.map((option) => (
                                        <MenuItem key={option.value} value={option.label}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                            </FormControl>
                        </div>
                    </FormControl>
                </div>
                <div>
                    <FormControl
                        className={'width60ch'}
                    >
                        <InputLabel shrink htmlFor="bootstrap-input" size='medium'>
                            <h4 className={'form_name'}>Date (time)</h4>
                        </InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer

                                components={[
                                    'DatePicker',
                                ]}

                            >
                                <DemoItem>
                                    <DatePicker
                                        defaultValue={today}
                                        disablePast
                                        views={['year', 'month', 'day']}
                                    />
                                </DemoItem>

                            </DemoContainer>
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl
                        className={'width60ch'}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                            <h4 className={'form_name'}>Time</h4>
                        </InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker']}>
                                <TimePicker
                                    label=""
                                    viewRenderers={{
                                        hours: renderTimeViewClock,
                                        minutes: renderTimeViewClock,
                                        seconds: renderTimeViewClock,
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>

                    </FormControl>

                </div>
                <div>
                    <FormControl
                        className={'width60ch'}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                            <h4 className={'form_name'}>Address</h4>
                        </InputLabel>
                        <TextField
                            fullWidth
                            id="outlined-select-currency"

                            placeholder="564 Kingstreate, Mailbourne"
                            onChange={e => squareFootageHandler(e)}
                        >

                        </TextField>

                    </FormControl>

                    <FormControl
                        className={'width60ch'}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                            <h4 className={'form_name'}>Total Square Footage</h4>
                        </InputLabel>
                        <TextField
                            fullWidth
                            id="outlined-select-currency"
                            select
                            defaultValue="Placeholder"
                            onChange={e => squareFootageHandler(e)}
                        >

                            <MenuItem disabled value="Placeholder">
                                <em>Placeholder</em>
                            </MenuItem>
                            {squareFootage_list.map((option) => (
                                <MenuItem key={option.value} value={option.label}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </FormControl>
                </div>
                <div className={'button'}>
                    <Button variant="contained" sx={{p: 2, width: '300px', margin: '0 auto'}}
                            onClick={handleSubmit}>
                        Request a Quote
                    </Button>
                </div>
            </Box>
        </ThemeProvider>
    );
}
