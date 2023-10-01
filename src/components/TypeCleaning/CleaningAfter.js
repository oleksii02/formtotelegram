import React from 'react';
import './TypeCleaning.css'
import logo from '../imgs/logo2.png'
import After_Repair from '../imgs/After_Repair .jpeg'
import After_Repair_big from '../imgs/After_Repair_big.jpeg'
import {Grid} from "@mui/material";
import './TypeCleaning.css'
import BookScheduleButton from "../UI/BookScheduleButton/BookScheduleButton";


function CleaningAfter(props) {
    return (
        <div className={'Cleaning__container'}>
            <div className={'background'}/>
            <div className={'logo'}>
                <img src={logo} alt={'logo'} className={'logo__img'}/>
                <span>
                    <img src={After_Repair} alt={'Regular'} className={'type_img'}/>
                    <h4>Cleaning after repairs</h4>
                </span>
            </div>
            <Grid container className={'rooms'}>
                <Grid item xs={12} sm={4} className={'room left'}>
                    <div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" viewBox="0 0 46 43" fill="none">
  <path d="M7.01953 42.3357C6.23769 42.0569 5.97294 41.5194 5.9757 40.7677C5.99362 36.6074 5.98811 32.4472 5.97708 28.2869C5.97708 27.9522 6.05154 27.7722 6.41419 27.6087C6.85406 27.4097 7.2567 27.1042 7.60694 26.7822C12.6868 22.1276 17.7557 17.4628 22.8259 12.798C22.95 12.6827 23.0479 12.5432 23.1306 12.4469C28.0244 16.9469 32.8616 21.3949 37.7139 25.8556C36.5956 26.6669 36.284 27.9839 35.5945 29.0943C35.4484 29.3301 35.2402 29.557 35.0057 29.7205C34.4762 30.0894 33.9109 30.4139 33.3635 30.7612C31.04 32.2367 31.0276 35.1979 33.3387 36.6898C33.3745 36.7126 33.4104 36.7393 33.449 36.757C34.934 37.439 35.88 38.5266 36.4426 39.9564C36.8686 41.0402 37.6932 41.8173 38.9122 42.1988C38.9729 42.2178 39.0142 42.2876 39.0639 42.3345H28.4118C28.4049 42.1988 28.3911 42.0645 28.3911 41.9288C28.3911 38.7725 28.4022 35.6174 28.387 32.4611C28.3718 29.2794 25.41 27.0028 22.0372 27.5593C19.5386 27.9712 17.7364 30.0045 17.7267 32.4624C17.7129 35.6187 17.7226 38.7738 17.7253 41.9301C17.7253 42.0645 17.7488 42.2001 17.7612 42.3345H7.01953V42.3357Z" fill="#3C87C0"/>
  <path d="M7.01953 42.3357C6.23769 42.0569 5.97294 41.5194 5.9757 40.7677C5.99362 36.6074 5.98811 32.4472 5.97708 28.2869C5.97708 27.9522 6.05154 27.7722 6.41419 27.6087C6.85406 27.4097 7.2567 27.1042 7.60694 26.7822C12.6868 22.1276 17.7557 17.4628 22.8259 12.798C22.95 12.6827 23.0479 12.5432 23.1306 12.4469C28.0244 16.9469 32.8616 21.3949 37.7139 25.8556C36.5956 26.6669 36.284 27.9839 35.5945 29.0943C35.4484 29.3301 35.2402 29.557 35.0057 29.7205C34.4762 30.0894 33.9109 30.4139 33.3635 30.7612C31.04 32.2367 31.0276 35.1979 33.3387 36.6898C33.3745 36.7126 33.4104 36.7393 33.449 36.757C34.934 37.439 35.88 38.5266 36.4426 39.9564C36.8686 41.0402 37.6932 41.8173 38.9122 42.1988C38.9729 42.2178 39.0142 42.2876 39.0639 42.3345H28.4118C28.4049 42.1988 28.3911 42.0645 28.3911 41.9288C28.3911 38.7725 28.4022 35.6174 28.387 32.4611C28.3718 29.2794 25.41 27.0028 22.0372 27.5593C19.5386 27.9712 17.7364 30.0045 17.7267 32.4624C17.7129 35.6187 17.7226 38.7738 17.7253 41.9301C17.7253 42.0645 17.7488 42.2001 17.7612 42.3345H7.01953V42.3357Z" fill="black" fill-opacity="0.2"/>
  <path d="M45.9887 21.523C45.8288 21.7144 45.6895 21.9235 45.5075 22.0934C44.4057 23.1189 43.2943 24.1355 42.1843 25.1546C41.6493 25.6452 41.3804 25.6465 40.8496 25.1584C35.1064 19.8789 29.3647 14.5993 23.6243 9.3172C23.5002 9.20311 23.4119 9.05354 23.2354 8.83044C23.0479 9.05987 22.9569 9.20438 22.8328 9.31847C17.1352 14.5625 11.4334 19.8028 5.73302 25.0444C5.09597 25.63 4.87535 25.6287 4.23829 25.0444C3.12966 24.0252 2.01964 23.0061 0.912379 21.9856C0.422868 21.5344 0.421489 21.2682 0.911 20.8182C2.40573 19.4415 3.90184 18.0662 5.39795 16.6921C5.49034 16.6072 5.58962 16.5286 5.68614 16.4462C5.9826 16.6972 6.24184 16.9583 6.5452 17.1675C8.53771 18.539 11.3493 17.9458 12.4965 15.9075C12.9447 15.1114 13.3294 14.2862 13.7775 13.4901C13.9127 13.2506 14.1305 13.0275 14.3677 12.8652C14.9965 12.4355 15.6584 12.0489 16.3009 11.6369C18.3417 10.3275 18.7099 7.9748 17.1586 6.17734C17.1228 6.13551 17.0883 6.09241 17.0304 6.02143C17.1283 5.92382 17.2207 5.82368 17.3213 5.72988C19.067 4.12256 20.8141 2.5165 22.5612 0.910449C23.0976 0.417352 23.3595 0.416084 23.8946 0.906647C31.1131 7.54129 38.3303 14.1759 45.5447 20.8144C45.7171 20.9741 45.8426 21.1769 45.9901 21.3594V21.523H45.9887Z" fill="#3C87C0"/>
  <path d="M45.9887 21.523C45.8288 21.7144 45.6895 21.9235 45.5075 22.0934C44.4057 23.1189 43.2943 24.1355 42.1843 25.1546C41.6493 25.6452 41.3804 25.6465 40.8496 25.1584C35.1064 19.8789 29.3647 14.5993 23.6243 9.3172C23.5002 9.20311 23.4119 9.05354 23.2354 8.83044C23.0479 9.05987 22.9569 9.20438 22.8328 9.31847C17.1352 14.5625 11.4334 19.8028 5.73302 25.0444C5.09597 25.63 4.87535 25.6287 4.23829 25.0444C3.12966 24.0252 2.01964 23.0061 0.912379 21.9856C0.422868 21.5344 0.421489 21.2682 0.911 20.8182C2.40573 19.4415 3.90184 18.0662 5.39795 16.6921C5.49034 16.6072 5.58962 16.5286 5.68614 16.4462C5.9826 16.6972 6.24184 16.9583 6.5452 17.1675C8.53771 18.539 11.3493 17.9458 12.4965 15.9075C12.9447 15.1114 13.3294 14.2862 13.7775 13.4901C13.9127 13.2506 14.1305 13.0275 14.3677 12.8652C14.9965 12.4355 15.6584 12.0489 16.3009 11.6369C18.3417 10.3275 18.7099 7.9748 17.1586 6.17734C17.1228 6.13551 17.0883 6.09241 17.0304 6.02143C17.1283 5.92382 17.2207 5.82368 17.3213 5.72988C19.067 4.12256 20.8141 2.5165 22.5612 0.910449C23.0976 0.417352 23.3595 0.416084 23.8946 0.906647C31.1131 7.54129 38.3303 14.1759 45.5447 20.8144C45.7171 20.9741 45.8426 21.1769 45.9901 21.3594V21.523H45.9887Z" fill="black" fill-opacity="0.2"/>
  <path d="M45.9887 34.0101C45.6784 34.3055 45.3764 34.6084 45.0538 34.8924C44.9062 35.0217 44.7256 35.1294 44.5436 35.2144C43.1909 35.8469 42.3001 36.8318 41.8092 38.1489C41.6617 38.5444 41.4204 38.9094 41.2204 39.2872C40.9984 39.7055 40.6261 39.9324 40.127 39.9311C39.6278 39.9311 39.2583 39.7004 39.0376 39.2808C38.5895 38.4252 38.1579 37.562 37.6849 36.7177C37.5512 36.4782 37.3333 36.2525 37.0961 36.0928C36.3943 35.6187 35.6607 35.1839 34.9437 34.7289C34.0557 34.166 34.0598 33.3053 34.9478 32.7362C35.1657 32.5968 35.3725 32.4358 35.6083 32.3268C37.0534 31.6613 37.9842 30.6028 38.5095 29.211C38.6446 28.8548 38.8556 28.5214 39.0404 28.1817C39.2638 27.7697 39.6209 27.5403 40.1325 27.5403C40.6441 27.5403 41.0026 27.771 41.2218 28.1855C41.681 29.0513 42.1209 29.9259 42.5938 30.7854C42.7069 30.992 42.8903 31.1897 43.093 31.3253C43.7728 31.7817 44.4981 32.1822 45.1627 32.6551C45.4868 32.8858 45.7157 33.228 45.9873 33.5196V34.0089L45.9887 34.0101Z" fill="#3C87C0"/>
  <path d="M45.9887 34.0101C45.6784 34.3055 45.3764 34.6084 45.0538 34.8924C44.9062 35.0217 44.7256 35.1294 44.5436 35.2144C43.1909 35.8469 42.3001 36.8318 41.8092 38.1489C41.6617 38.5444 41.4204 38.9094 41.2204 39.2872C40.9984 39.7055 40.6261 39.9324 40.127 39.9311C39.6278 39.9311 39.2583 39.7004 39.0376 39.2808C38.5895 38.4252 38.1579 37.562 37.6849 36.7177C37.5512 36.4782 37.3333 36.2525 37.0961 36.0928C36.3943 35.6187 35.6607 35.1839 34.9437 34.7289C34.0557 34.166 34.0598 33.3053 34.9478 32.7362C35.1657 32.5968 35.3725 32.4358 35.6083 32.3268C37.0534 31.6613 37.9842 30.6028 38.5095 29.211C38.6446 28.8548 38.8556 28.5214 39.0404 28.1817C39.2638 27.7697 39.6209 27.5403 40.1325 27.5403C40.6441 27.5403 41.0026 27.771 41.2218 28.1855C41.681 29.0513 42.1209 29.9259 42.5938 30.7854C42.7069 30.992 42.8903 31.1897 43.093 31.3253C43.7728 31.7817 44.4981 32.1822 45.1627 32.6551C45.4868 32.8858 45.7157 33.228 45.9873 33.5196V34.0089L45.9887 34.0101Z" fill="black" fill-opacity="0.2"/>
  <path d="M20.3356 42.3357C20.3549 42.162 20.3893 41.9884 20.3893 41.8147C20.3921 38.7154 20.388 35.6161 20.3935 32.5181C20.3962 31.2911 21.1133 30.3505 22.2674 30.0285C23.8407 29.5887 25.5078 30.5267 25.6623 32.0351C25.7684 33.0695 25.683 34.1216 25.683 35.2333C25.3051 35.2333 24.9149 35.2308 24.5233 35.2333C23.6546 35.2396 23.0672 35.7302 23.063 36.4502C23.0589 37.1727 23.6477 37.676 24.5081 37.6836C24.8915 37.6874 25.2748 37.6836 25.7505 37.6836V42.3357H20.3356Z" fill="#3C87C0"/>
  <path d="M20.3356 42.3357C20.3549 42.162 20.3893 41.9884 20.3893 41.8147C20.3921 38.7154 20.388 35.6161 20.3935 32.5181C20.3962 31.2911 21.1133 30.3505 22.2674 30.0285C23.8407 29.5887 25.5078 30.5267 25.6623 32.0351C25.7684 33.0695 25.683 34.1216 25.683 35.2333C25.3051 35.2333 24.9149 35.2308 24.5233 35.2333C23.6546 35.2396 23.0672 35.7302 23.063 36.4502C23.0589 37.1727 23.6477 37.676 24.5081 37.6836C24.8915 37.6874 25.2748 37.6836 25.7505 37.6836V42.3357H20.3356Z" fill="black" fill-opacity="0.2"/>
  <path d="M15.4502 8.55025C15.4295 8.99264 15.2199 9.34504 14.8104 9.60109C13.9306 10.1512 13.0481 10.6976 12.1822 11.2655C11.9891 11.3922 11.8195 11.5824 11.7134 11.7763C11.2046 12.7105 10.7095 13.6524 10.231 14.6005C9.97043 15.1164 9.57469 15.4498 8.94591 15.4524C8.31713 15.4562 7.91449 15.1228 7.65388 14.6094C7.16575 13.6511 6.66796 12.6953 6.15501 11.7471C6.05573 11.5633 5.89302 11.3833 5.711 11.2655C4.86711 10.7153 4.0053 10.1893 3.15314 9.64926C2.1755 9.0294 2.18101 8.0749 3.16417 7.4525C3.91843 6.97462 4.66579 6.48532 5.43522 6.02899C5.8351 5.79194 6.11502 5.50166 6.31083 5.09983C6.73829 4.22011 7.21125 3.35941 7.65801 2.4873C7.92001 1.97772 8.31713 1.65195 8.95694 1.65955C9.57469 1.66716 9.96078 1.98153 10.2159 2.47969C10.7068 3.438 11.2018 4.39378 11.7175 5.34068C11.8237 5.53589 11.9988 5.72222 12.1918 5.84772C13.0468 6.408 13.9169 6.94546 14.7856 7.488C15.1923 7.74152 15.4212 8.08377 15.4502 8.54771V8.55025Z" fill="#3C87C0"/>
  <path d="M15.4502 8.55025C15.4295 8.99264 15.2199 9.34504 14.8104 9.60109C13.9306 10.1512 13.0481 10.6976 12.1822 11.2655C11.9891 11.3922 11.8195 11.5824 11.7134 11.7763C11.2046 12.7105 10.7095 13.6524 10.231 14.6005C9.97043 15.1164 9.57469 15.4498 8.94591 15.4524C8.31713 15.4562 7.91449 15.1228 7.65388 14.6094C7.16575 13.6511 6.66796 12.6953 6.15501 11.7471C6.05573 11.5633 5.89302 11.3833 5.711 11.2655C4.86711 10.7153 4.0053 10.1893 3.15314 9.64926C2.1755 9.0294 2.18101 8.0749 3.16417 7.4525C3.91843 6.97462 4.66579 6.48532 5.43522 6.02899C5.8351 5.79194 6.11502 5.50166 6.31083 5.09983C6.73829 4.22011 7.21125 3.35941 7.65801 2.4873C7.92001 1.97772 8.31713 1.65195 8.95694 1.65955C9.57469 1.66716 9.96078 1.98153 10.2159 2.47969C10.7068 3.438 11.2018 4.39378 11.7175 5.34068C11.8237 5.53589 11.9988 5.72222 12.1918 5.84772C13.0468 6.408 13.9169 6.94546 14.7856 7.488C15.1923 7.74152 15.4212 8.08377 15.4502 8.54771V8.55025Z" fill="black" fill-opacity="0.2"/>
  <path d="M30.8483 3.71064C31.0083 3.70176 31.1682 3.68528 31.3282 3.68528C32.925 3.68402 34.5217 3.68148 36.1185 3.68528C37.2134 3.68782 37.7194 4.15683 37.7208 5.15824C37.7222 6.7757 37.7208 8.3919 37.7208 9.90288C35.498 7.85697 33.2242 5.76542 30.949 3.67261C30.9145 3.68528 30.8814 3.69796 30.847 3.71064H30.8483Z" fill="#3C87C0"/>
  <path d="M30.8483 3.71064C31.0083 3.70176 31.1682 3.68528 31.3282 3.68528C32.925 3.68402 34.5217 3.68148 36.1185 3.68528C37.2134 3.68782 37.7194 4.15683 37.7208 5.15824C37.7222 6.7757 37.7208 8.3919 37.7208 9.90288C35.498 7.85697 33.2242 5.76542 30.949 3.67261C30.9145 3.68528 30.8814 3.69796 30.847 3.71064H30.8483Z" fill="black" fill-opacity="0.2"/>
</svg>

                        </span>
                        <h5>
                            &nbsp;
                        </h5>
                        <ul>
                            <li>Removal of glue residues</li>
                            <li>Paint removal</li>
                            <li>Varnish removal</li>
                            <li>Removal of silicone</li>
                            <li>Removal of cement</li>
                            <li>Removal of dirt from the tile</li>
                            <li>Dedusting of all surfaces</li>
                            <li>Wet floor cleaning (6-8 repetitions)</li>
                            <li>Washing door blocks</li>
                            <li>Removing dust from sockets and switches</li>
                            <li>Cleaning mirror surfaces</li>

                        </ul>
                    </div>

                </Grid>
                <Grid item xs={12} sm={8} className={'room right'}>
                    <img src={After_Repair_big} alt={'After_Repair_big'} className={'big_img'}/>

                </Grid>
                <Grid item xs={12} className={'room__button'}><BookScheduleButton/></Grid>
            </Grid>



        </div>
    );
}

export default CleaningAfter;
