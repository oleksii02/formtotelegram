import React from 'react';
import FormControl from '@mui/joy/FormControl';

import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import {sendMessage} from "../../../api/bookSchedule.ts";




function InputSubscription() {



    const [data, setData] = React.useState({
        email: '',
        status: 'initial',
    });

    const handleSubmit =  async (event) => {
        event.preventDefault();
        setData((current) => ({...current, status: 'loading'}));
        try {
            // Replace timeout with real backend operation
            const message =
            `New email!!!${'%0A'}Email: ${data.email}${'%0A'}`
            await sendMessage(message)
            setTimeout(() => {
                setData({email: '', status: 'sent'});
            }, 1500);
        } catch (error) {
            setData((current) => ({...current, status: 'failure'}));
        }
    };

    return (
                <form onSubmit={handleSubmit} id="demo">
                    <FormControl>

                        <Input
                            sx={{'--Input-decoratorChildHeight': '45px',
                            backgroundColor:'#003156',
                                color:'#9BD3FF',
                            '&:focus-within':{
                                focusedHighlight:'2px solid #9BD3FF'
                            }}}
                            placeholder="Enter Your Email"
                            type="email"
                            required
                            value={data.email}
                            onChange={(event) =>
                                setData({email: event.target.value, status: 'initial'})
                            }
                            error={data.status === 'failure'}
                            endDecorator={
                                <Button
                                    variant="solid"
                                    loading={data.status === 'loading'}
                                    type="submit"
                                    sx={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0,
                                    color:'#FFF',
                                    backgroundColor:'#FFF',
                                    '&:hover': {backgroundColor:'#9BD3FF'} }}
                                >
                                    <TelegramIcon sx={{color:'#003156'}}/>
                                </Button>
                            }
                        />
                        {data.status === 'failure' && (
                            <FormHelperText
                                sx={(theme) => ({color: theme.vars.palette.danger[400]})}
                            >
                                Oops! something went wrong, please try again later.
                            </FormHelperText>
                        )}

                        {data.status === 'sent' && (
                            <FormHelperText
                                sx={(theme) => ({color: theme.vars.palette.primary[400]})}
                            >
                                You are all set!
                            </FormHelperText>
                        )}
                    </FormControl>
                </form>
    );
}

export default InputSubscription;
