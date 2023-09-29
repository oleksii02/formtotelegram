import React from 'react';
import './TypeCleaning.css'
import logo from '../imgs/logo2.png'
import Pets from '../imgs/Pets.png'
import {Grid} from "@mui/material";
import './TypeCleaning.css'
import BookScheduleButton from "../UI/BookScheduleButton/BookScheduleButton";
import dog from '../imgs/dog.jpeg'
import dog2 from '../imgs/dog2.jpeg'
import cat from '../imgs/cat.jpeg'


function PetsCleaning(props) {
    return (
        <div className={'Cleaning__container'}>
            <div className={'background'}/>
            <div className={'logo'}>
                <img src={logo} alt={'logo'} className={'logo__img'}/>
                <span>
                    <img src={Pets} alt={'Pets'} className={'type_img'}/>
                    <h4>Pets and a Clean Home</h4>
                </span>
            </div>
            <Grid container className={'Pets'}>

                <Grid item xs={12} className={'room'}>
                    <h5>Cleaning up after animals</h5>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" viewBox="0 0 45 43"
                               fill="none">
  <path
      d="M24.01 0C24.0184 0.138384 24.0322 0.275474 24.0322 0.413858C24.0322 5.40473 24.0322 10.3956 24.0322 15.3865C24.0322 15.5365 24.0322 15.6865 24.0322 15.8637H20.9883C20.9744 15.7615 20.9481 15.6568 20.9481 15.552C20.9467 10.437 20.9467 5.32066 20.9481 0.205636C20.9481 0.137091 20.9619 0.0685453 20.9703 0C21.984 0 22.9963 0 24.01 0V0Z"
      fill="#3C87C0"/>
  <path
      d="M27.1414 19.0764C30.8574 19.6287 34.361 20.5417 37.3424 22.6951C38.0284 23.1904 38.6575 23.7931 39.1782 24.4398C40.7224 26.359 40.6974 28.5512 39.174 30.4886C37.9423 32.0548 36.2468 33.0739 34.3929 33.8783C31.4851 35.1406 28.3995 35.7575 25.2168 35.9942C21.6563 36.2593 18.1361 36.0394 14.67 35.2169C12.201 34.631 9.83196 33.8033 7.81287 32.3212C7.00607 31.7288 6.24787 31.0214 5.65492 30.2415C4.26349 28.4128 4.34542 26.3383 5.74101 24.5044C6.71029 23.2318 8.01561 22.3252 9.45425 21.566C11.7025 20.3788 15.1796 19.3558 17.8417 19.1075V19.5498C17.8417 21.1444 17.8417 22.7404 17.8417 24.335C17.8417 25.4266 18.4305 25.9853 19.5872 25.9866C21.523 25.9891 23.4587 25.9891 25.3959 25.9866C26.5513 25.9853 27.14 25.4266 27.1414 24.335C27.1428 22.7533 27.1414 21.1729 27.1414 19.5912C27.1414 19.4398 27.1414 19.2898 27.1414 19.0764ZM6.2076 27.4583C6.23259 27.673 6.24092 27.8386 6.27286 27.9989C6.48255 29.0582 7.13799 29.8691 7.96146 30.5778C9.22651 31.6668 10.7179 32.4182 12.3162 32.9717C18.1638 34.9944 24.1142 35.16 30.1326 33.7412C32.4558 33.1929 34.6554 32.3613 36.555 30.9541C37.4146 30.3165 38.1534 29.5742 38.5311 28.5887C38.6658 28.2369 38.713 27.858 38.806 27.47H37.2994C37.1508 27.8334 37.0925 28.2123 36.8717 28.4645C36.3579 29.0491 35.8274 29.6492 35.1914 30.1044C33.575 31.2607 31.6878 31.9112 29.7326 32.3845C25.9514 33.2989 22.1173 33.4347 18.2583 32.9445C15.7226 32.6225 13.2647 32.0224 11.0179 30.8429C9.52785 30.0605 8.11004 29.1836 7.70317 27.4596H6.20899L6.2076 27.4583Z"
      fill="#3C87C0"/>
  <path d="M19.422 17.3457H25.5682V24.5223H19.422V17.3457Z" fill="#3C87C0"/>
  <path
      d="M3.13314 10.1033C3.57334 10.1033 3.98854 10.0877 4.40097 10.1136C4.49956 10.1201 4.65092 10.2507 4.67037 10.3438C5.02864 12.0173 5.92987 12.8192 7.72261 13.0119V14.4125C5.89099 14.613 4.8495 15.5545 4.63565 17.294H3.21923C3.03176 16.7974 2.91789 16.3047 2.66794 15.8792C2.1833 15.0514 1.39316 14.5794 0.379451 14.4759C0.105888 14.4475 -0.0163127 14.3737 0.00173973 14.0996C0.0253467 13.7426 0.00729431 13.3844 0.00729431 13.03C2.08471 12.8308 3.02204 11.5505 3.13175 10.102L3.13314 10.1033Z"
      fill="#3C87C0"/>
  <path
      d="M38.8074 7.93825C39.2351 7.93825 39.6642 7.92273 40.0905 7.94989C40.1808 7.95507 40.3155 8.10638 40.3349 8.20726C40.6516 9.81484 41.6305 10.6775 43.4163 10.8456V12.2398C41.5486 12.4441 40.4974 13.3973 40.2919 15.1394H38.8074C38.7491 14.86 38.7255 14.582 38.6311 14.3272C38.2089 13.1774 37.3619 12.4778 36.0551 12.3122C35.7621 12.2747 35.6372 12.1958 35.658 11.9061C35.683 11.5634 35.6635 11.2181 35.6635 10.8637C37.5479 10.6632 38.5825 9.69974 38.806 7.93825H38.8074Z"
      fill="#3C87C0"/>
  <path
      d="M27.1609 5.02848V3.63559C29.0147 3.45065 30.0423 2.49231 30.2728 0.759277H31.7573C31.9767 2.4548 32.989 3.44289 34.8734 3.63689V5.0246C33.0307 5.21213 31.985 6.17047 31.7615 7.91385H30.2784C30.0534 6.20927 29.0522 5.22765 27.1609 5.02978V5.02848Z"
      fill="#3C87C0"/>
  <path
      d="M16.2947 7.18957C14.5325 7.33959 13.3647 8.32121 13.1481 10.0788H11.6761C11.4442 8.38459 10.4541 7.39391 8.57248 7.19862V5.80444C10.4069 5.61044 11.4428 4.66245 11.6622 2.92554H13.1661C13.2953 4.22531 13.959 5.14873 15.2824 5.61303C15.4477 5.67123 15.6296 5.74107 15.7976 5.73201C16.2684 5.70356 16.3322 5.93506 16.3003 6.29331C16.2725 6.59206 16.2947 6.8947 16.2947 7.18957Z"
      fill="#3C87C0"/>
  <path
      d="M14.7131 36.7828C16.3003 37.0156 17.8084 37.2367 19.3901 37.4682C19.2165 38.1162 19.0512 38.7835 18.854 39.4418C18.7429 39.8143 18.5999 40.1816 18.4374 40.5373C18.025 41.4426 17.0294 41.9224 15.9948 41.7168C15.1547 41.5499 14.3604 41.2628 14.0257 40.4545C13.8674 40.073 13.7771 39.5944 13.873 39.2064C14.0799 38.3774 14.4284 37.5795 14.7131 36.7815V36.7828Z"
      fill="#3C87C0"/>
  <path
      d="M25.5404 37.4789C27.1734 37.2409 28.6815 37.0197 30.2854 36.7856C30.5645 37.6379 30.8672 38.5019 31.1213 39.38C31.1866 39.6051 31.1269 39.8792 31.0658 40.1172C30.8269 41.0458 29.8785 41.6873 28.6857 41.7507C27.7344 41.8011 26.8526 41.2592 26.5263 40.372C26.1778 39.4214 25.8723 38.4566 25.5404 37.4789Z"
      fill="#3C87C0"/>
  <path
      d="M24.0128 37.5382C24.2794 38.5535 24.571 39.5415 24.7849 40.5439C24.8501 40.8465 24.7682 41.2164 24.6349 41.5087C24.1183 42.6455 22.8741 42.8317 21.5341 42.5187C20.4995 42.2769 19.9885 41.2875 20.2537 40.2335C20.4329 39.5196 20.6162 38.807 20.8217 38.0995C21.0203 37.4166 20.8411 37.533 21.6327 37.5369C22.4047 37.5408 23.1768 37.5369 24.0114 37.5369L24.0128 37.5382Z"
      fill="#3C87C0"/>
  <path
      d="M31.7351 36.4339C32.9488 35.9735 34.1 35.5338 35.2553 35.1044C35.3359 35.0746 35.4608 35.0811 35.5386 35.1186C37.0856 35.8623 37.2244 37.5837 35.8233 38.5524C35.365 38.8692 34.9054 39.1641 34.2972 39.1602C33.4945 39.155 32.8766 38.8382 32.5197 38.1773C32.2142 37.6134 31.9906 37.0107 31.7351 36.4352V36.4339Z"
      fill="#3C87C0"/>
  <path
      d="M13.2453 36.4299C12.9967 36.9925 12.7704 37.5628 12.4954 38.1125C12.1135 38.8755 11.3095 39.2894 10.4055 39.1264C9.29319 38.9272 7.78651 37.8253 8.2642 36.4156C8.46694 35.8181 8.94602 35.4599 9.45149 35.1146C9.50981 35.0745 9.61396 35.0887 9.69589 35.0861C9.72228 35.0861 9.74866 35.1107 9.77643 35.121C10.9151 35.5504 12.0524 35.9798 13.2453 36.4299Z"
      fill="#3C87C0"/>
  <path
      d="M3.26077 26.2346C2.94416 27.5538 3.15801 28.763 3.70792 30.0111C3.10108 30.1171 2.54145 30.2775 1.97627 30.3021C0.977839 30.346 0.139097 29.627 0.0391145 28.7022C0.000232439 28.3466 -0.0011562 27.9806 0.0391145 27.6249C0.154372 26.5554 1.22641 25.8311 2.36371 26.0342C2.65255 26.0859 2.93583 26.1609 3.26216 26.2333L3.26077 26.2346Z"
      fill="#3C87C0"/>
  <path
      d="M41.7291 26.2759C42.9206 25.8025 43.9398 25.9668 44.5536 26.7104C45.1549 27.4386 45.1535 28.9556 44.5203 29.6385C43.701 30.5205 42.7956 30.4533 41.3069 29.9385C41.8166 28.7642 42.036 27.555 41.7291 26.2759Z"
      fill="#3C87C0"/>
  <path
      d="M7.97121 34.2791C7.34077 34.6309 6.73115 35.0279 6.07016 35.3254C5.37167 35.6396 4.63708 35.5491 4.06773 35.0602C3.28592 34.389 2.98042 33.5147 3.19844 32.5357C3.31925 31.9951 3.70946 31.6006 4.26075 31.3782C4.35935 31.3381 4.57042 31.3666 4.62736 31.4364C5.53831 32.5383 6.66589 33.41 7.90734 34.1653C7.92816 34.1782 7.93511 34.2118 7.97121 34.2791Z"
      fill="#3C87C0"/>
  <path
      d="M37.0605 34.2908C37.9409 33.5808 38.7964 32.8992 39.6393 32.2021C39.8489 32.0288 40.0489 31.827 40.1892 31.6033C40.4252 31.2269 40.678 31.3045 40.9849 31.4985C41.657 31.924 41.9902 32.6767 41.8208 33.4178C41.818 33.4307 41.8153 33.445 41.8125 33.4592C41.3667 35.6113 39.5434 35.9786 38.1131 34.9116C37.7799 34.662 37.3883 34.4796 37.0633 34.2895L37.0605 34.2908Z"
      fill="#3C87C0"/>
  <path
      d="M3.88577 24.5675C2.75542 23.7618 3.00815 22.4504 3.75524 21.4119C4.26904 20.6967 5.54104 20.2647 6.94079 21.3511C5.69934 22.2422 4.62314 23.269 3.88577 24.5675Z"
      fill="#3C87C0"/>
  <path
      d="M41.0959 24.5611C40.3585 23.2794 39.3115 22.2499 38.0742 21.3808C38.9019 20.5182 40.3294 20.4497 41.1056 21.2825C41.8777 22.1103 42.3193 23.7566 41.0959 24.5611Z"
      fill="#3C87C0"/>
</svg></span>

                    <div className={'text'}>


                        <div>
                            <img src={dog} alt={'dog'}/>
                            <img src={dog2} alt={'dog'}/>
                        </div>


                        <ul>
                            <br/>
                            <p> is a process that requires attention and accuracy. We have safe means for cleaning
                                premises after animals. After our cleaning, the apartment remains clean and smells nice.
                                At the request of the customer, cleaning work can be carried out without the use of
                                chemical cleaning agents and detergents, which sometimes cause allergies and other
                                reactions in animals and people.</p>
                            <br/>
                            <li>Functions of general cleaning
                            </li>
                            <li>+ Cleaning sofa and other soft furniture from animal fur.
                            </li>
                            <li>+ Cleaning the carpet from wool and street dirt (if the pet goes out for a walk).
                            </li>
                            <li>+ Deodorization by our specialists. Dealing with the smell of cat or dog urine and feces
                                on your own is often almost impossible.
                            </li>
                            <li>+ Wet cleaning of all horizontal surfacesning
                            </li>
                            <img src={cat} alt={'cat'} className={'cat'}/>
                        </ul>


                    </div>

                </Grid>

                <Grid item xs={12} className={'room__button'}><BookScheduleButton/></Grid>
            </Grid>


        </div>);
}

export default PetsCleaning;