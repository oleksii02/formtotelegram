import React from 'react';
import {Grid} from "@mui/material";
import './Footer.css'
import InputSubscription from "../UI/InputSubscription/InputSubscription";
import logo from '../imgs/logo2.png'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer(props) {


    return (
            <Grid container className={'Footer'}>

                <Grid container className={'newsLetter'}>
                    <Grid item xs={6} className={''}>
                        <h3>
                            Subscribe To Our News Letter
                        </h3>
                        <p>Subscribe our news letter to get <br/>
                            latest news and updates</p>
                    </Grid>
                    <Grid item xs={6} className={'InputSubscription'}>
                        <InputSubscription/>
                    </Grid>
                </Grid>
                <Grid container className={'Section'}>
                    <Grid item xs={5} className={'logo'}>
                        <img src={logo} alt={'logo'}/>
                    </Grid>
                    <Grid item container xs={7} className={'link'} >
                        <Grid item xs={4} className={'links'}>
                            <h4>Services</h4>
                            <hr/>
                            <a>House Cleaning</a>
                            <a>Office Cleaning</a>
                            <a>Apartment Cleaning</a>
                        </Grid>
                        <Grid item xs={4} className={'links'}>
                            <h4>Contact</h4>
                            <hr/>
                            <a><LocalPhoneOutlinedIcon/>&nbsp;(+021) 254 4458 187</a>
                            <a><EmailOutlinedIcon/>&nbsp;info@email.com</a>
                            <a><FmdGoodOutlinedIcon/>&nbsp;564 Kingstreate, Mailbourne</a>
                        </Grid>
                    </Grid>


                </Grid>
                <Grid item xs={12} className={'social__networks'}>
                    <FacebookOutlinedIcon className={'network'}/>
                    <TwitterIcon className={'network'}/>
                    <LinkedInIcon className={'network'}/>
                    <InstagramIcon className={'network'}/>
                </Grid>
                <Grid item xs={12} className={'Copyright'}>
                    <hr/><p>Copyright by Cleanex @ 2023. All rights <br/>reserved</p><hr/>
                </Grid>


            </Grid>

    );
}

export default Footer;
