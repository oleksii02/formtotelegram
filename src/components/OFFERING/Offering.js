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


function Offering(props) {
    return (
        <div className={'Offering'}>
            <div className={'background'}/>
            <div className={'logo'}>
                <img src={logo} alt={'logo'}/>
                <h3>
                    WHAT WE ARE OFFERING
                </h3>

            </div>
            <Grid container className={'container'}>
                <Grid item xs={6} md={4} className={'content'}>
                    <div className={'Offering__groups'}>
                        <img src={Regular} alt={'Regular Cleaning'}/>
                        <div className={'group Regular'}>
                            <h4>Regular Cleaning</h4>
                            <p>$41 /maid-hour</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={4} className={'content'}>
                    <div className={'Offering__groups'}>
                        <img src={One_Time} alt={'Offering'}/>
                        <div className={'group OneTime'}>
                            <h4>One - Time Cleaning</h4>
                            <p>$45 /maid-hour</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={4} className={'content'}>
                    <div className={'Offering__groups'}>
                        <img src={Move_in} alt={'Offering'}/>
                        <div className={'group Move_in'}>
                            <h4>Move-in/ Move-out Cleaning</h4>
                            <p>$47 /maid-hour</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={4} className={'content'}>
                    <div className={'Offering__groups'}>
                        <img src={Office} alt={'Offering'}/>
                        <div className={'group Office'}>
                            <h4>Office/ Commercial Cleaning</h4>
                            <p>$46 /maid-hour</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={4} className={'content'}>
                    <div className={'Offering__groups'}>
                        <img src={After_Repair} alt={'Offering'}/>
                        <div className={'group After_Repair'}>
                            <h4>After Repair Cleaning</h4>
                            <p>$50 /maid-hour</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={4} className={'content'}>
                    <div className={'Offering__groups'}>
                        <img src={Deep} alt={'Offering'}/>
                        <div className={'group Deep'}>
                            <h4>Deep Cleaning</h4>
                            <p>$38/maid-hour</p>
                        </div>
                    </div>
                </Grid>

            </Grid>

        </div>
    );
}

export default Offering;
