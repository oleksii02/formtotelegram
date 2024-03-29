import React from 'react';
import {Grid} from "@mui/material";
import './Footer.css'
import InputSubscription from "../UI/InputSubscription/InputSubscription";
import logo from '../imgs/logo2.png'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer(props) {


    return (
            <Grid container className={'Footer'} id={'contact'}>

                <Grid container className={'newsLetter'}>
                    <Grid item xs={12} md={6} className={'Subscribe'}>
                        <h3>
                            Subscribe To Our News Letter
                        </h3>
                        <p>Subscribe our news letter to get <br/>
                            latest news and updates</p>
                    </Grid>
                    <Grid item xs={12} md={6} className={'InputSubscription'}>
                        <InputSubscription/>
                    </Grid>
                </Grid>
                <Grid container className={'Section'}>
                    <Grid item xs={12} md={5} className={'logo'}>
                        <img src={logo} alt={'logo'}/>
                    </Grid>
                    <Grid item container xs={12} md={7} className={'link'} >
                        <Grid item xs={12} sm={4} className={'links'}>
                            <h4>Services</h4>
                            <hr/>
                            <a href={'#regular-cleaning'}>House Cleaning</a>
                            <a href={'#office-cleaning'}>Office Cleaning</a>
                            <a href={'#cleaning-after'}>Apartment Cleaning</a>
                        </Grid>
                        <Grid item xs={12} sm={4} className={'links'}>
                            <h4>Contact</h4>
                            <hr/>
                            <a href={'tel:+13313137082'}><LocalPhoneOutlinedIcon/>&nbsp;+1 (331) 313-7082</a>
                            <a href={'mailto:chsparklee@gmail.com'}><EmailOutlinedIcon/>&nbsp;chsparklee@gmail.com</a>
                            <a href={'https://www.instagram.com/sparkle_elite_cleaning/'} target={"_blank"} rel={'noreferrer'}><InstagramIcon/>&nbsp;sparkle_elite_cleaning</a>
                        </Grid>
                    </Grid>


                </Grid>
{/*                <Grid item xs={12} md={3} className={'social__networks'}>
                    <FacebookOutlinedIcon className={'network'}/>
                    <TwitterIcon className={'network'}/>
                    <LinkedInIcon className={'network'}/>
                    <InstagramIcon className={'network'}/>
                </Grid>*/}
                <Grid item xs={12} className={'Copyright'}>
                    <hr/><p>Copyright by Cleanex @ 2023. All rights <br/>reserved</p><hr/>
                </Grid>


            </Grid>

    );
}

export default Footer;
