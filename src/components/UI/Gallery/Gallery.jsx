import React, { useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import 'swiper/css/thumbs';

import './Gallery.css';

// import required modules
import {FreeMode, Grid, HashNavigation, Keyboard, Mousewheel, Navigation, Thumbs} from 'swiper/modules';
import RegularCleaning from "../../TypeCleaning/RegularCleaning";
import DeepCleaning from "../../TypeCleaning/DeepCleaning";
import MoveInCleaning from "../../TypeCleaning/MoveInCleaning";
import CleaningAfter from "../../TypeCleaning/CleaningAfter";
import OfficeCleaning from "../../TypeCleaning/OfficeCleaning";
import OneTime from "../../TypeCleaning/OneTime";
import Box from "@mui/material/Box";

export default function Gallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Box id={'our_services'}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#003156',
                    '--swiper-pagination-color': '#003156',
                }}
                loop={true}
                autoHeight={true}
                spaceBetween={10}
                navigation={true}
                keyboard={true}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}

                modules={[FreeMode, Navigation, Thumbs, Mousewheel, Keyboard,HashNavigation]}


                hashNavigation={{
                    watchState: true,
                }
                }
                className="mySwiper2"
            >


                <SwiperSlide
                    data-hash={'regular-cleaning'}
                    id={'regular-cleaning'}>
                    <RegularCleaning/>
                </SwiperSlide>
                <SwiperSlide
                    data-hash={'one-time'}
                    id={'one-time'}>
                    <OneTime/>
                </SwiperSlide>
                <SwiperSlide
                    data-hash={'move-in-cleaning'}
                    id={'move-in-cleaning'}>
                    <MoveInCleaning/>
                </SwiperSlide>
                <SwiperSlide
                    data-hash={'cleaning-after'}
                    id={'cleaning-after'}>
                    <CleaningAfter/>
                </SwiperSlide>
                <SwiperSlide
                    data-hash={'office-cleaning'}
                    id={'office-cleaning'}
                >
                    <OfficeCleaning/>
                </SwiperSlide>
                <SwiperSlide
                data-hash={'deep-cleaning'}
                id={'deep-cleaning'}>
                    <DeepCleaning/>
                </SwiperSlide>

            </Swiper>
            <Swiper

                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={'auto'}
                freeMode={true}
                modules={[FreeMode, Navigation, Thumbs, Grid]}




                className="mySwiper"
            >
                <SwiperSlide onClick={()=>console.log(setThumbsSwiper)}>
                    <div className={'group Regular'}>
                        <h4>Regular Cleaning</h4>
                        <p>$41 /maid-hour</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'group OneTime'}>
                        <h4>One - Time Cleaning</h4>
                        <p>$45 /maid-hour</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'group Move_in'}>
                        <h4>Move-in/ Move-out Cleaning</h4>
                        <p>$47 /maid-hour</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'group Office'}>
                        <h4>After Repair Cleaning</h4>
                        <p>$50 /maid-hour</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'group After_Repair'}>
                        <h4>Office Cleaning</h4>
                        <p>$46 /maid-hour</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'group Deep'}>
                        <h4>Deep Cleaning</h4>
                        <p>$38/maid-hour</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
}
