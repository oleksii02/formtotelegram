import React from 'react';
import './Offering.css'
import logo from '../imgs/logo2.png'
import {Grid} from "@mui/material";
import Regular from '../imgs/Regular.jpeg'
import One_Time from '../imgs/One_Time.jpeg'
import Move_in from '../imgs/Move-in.jpeg'
import Office from '../imgs/Office.jpeg'
import After_Repair from '../imgs/After_Repair .jpeg'
import Deep from '../imgs/Deep.png'
import Holiday from '../imgs/Holiday.jpeg'
import Pets from '../imgs/Pets.png'


function Offering(props) {
    return (
        <div className={'Offering'} id={'what_we_are_offering'}>
            <div className={'background'}/>
            <div className={'logo'}>
                <img src={logo} alt={'logo'}/>
                <h3>
                    WHAT WE ARE OFFERING
                </h3>

            </div>
            <Grid container className={'container'}>
                <Grid item xs={6} md={3} className={'content Regular'}>
                    <div className={'Offering__groups'}>
                        <img src={Regular} alt={'Regular Cleaning'} className={'Regular'}/>
                        <div className={'group '}>
                            <h4>Regular Cleaning</h4>
                            <p>$41 /maid-hour</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={3} className={'content OneTime'}>
                    <div className={'Offering__groups'}>
                        <img src={One_Time} alt={'Offering'} className={'One_Time'}/>
                        <div className={'group '}>
                            <h4>One - Time Cleaning</h4>
                            <p>$45 /maid-hour</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={3} className={'content Move_in'}>
                    <div className={'Offering__groups'}>
                        <img src={Move_in} alt={'Offering'} className={'Move_in'}/>
                        <div className={'group '}>
                            <h4>Move-in/ Move-out Cleaning</h4>
                            <p>$47 /maid-hour</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={3} className={'content Office'}>
                    <div className={'Offering__groups'}>
                        <img src={Office} alt={'Offering'} className={'Office'}/>
                        <div className={'group'}>
                            <h4>Office/ Commercial Cleaning</h4>
                            <p>$46 /maid-hour</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={3} className={'content After_Repair'}>
                    <div className={'Offering__groups'}>
                        <img src={After_Repair} alt={'Offering'} className={'After_Repair'}/>
                        <div className={'group'}>
                            <h4>After Repair Cleaning</h4>
                            <p>$50 /maid-hour</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={3} className={'content Deep'}>
                    <div className={'Offering__groups'}>
                        <img src={Deep} alt={'Offering'} />
                        <div className={'group'}>
                            <h4>Deep Cleaning</h4>
                            <p>$38/maid-hour</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={3} className={'content Holiday'}>
                    <div className={'Offering__groups'}>
                        <img src={Holiday} alt={'Holiday'} />
                        <div className={'group'}>
                            <h4>Holiday Cleaning</h4>
                            <p>$45 /maid-hour</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={3} className={'content Pets'}>
                    <div className={'Offering__groups'}>
                        <img src={Pets} alt={'Pets'} />
                        <div className={'group'}>
                            <h4> Pets and a Clean Home</h4>
                            <p>$38/maid-hour</p>
                        </div>
                    </div>
                </Grid>

            </Grid>

        </div>
    );
}

export default Offering;
