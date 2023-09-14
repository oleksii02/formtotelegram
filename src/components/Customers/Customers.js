import React from 'react';
import './Customers.css'
import Box from "@mui/material/Box";
import {Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';


function Customers(props) {
    return (
        <div className={'Customers'}>
            <div className={'background'}>
                <h3>Happy Customers</h3>
            </div>
            <Box className={'comments'}>
                <div className={'comment'}>
                    <h4>Courtney Henry</h4>
                    <h5>Nursing Assistant</h5>
                    <p>Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt
                        mollit dolore cillum minim tempor enim.</p>

                    <Box
                        sx={{
                            width: 200,
                            margin: ' 27px auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Rating
                            name="text-feedback"
                            value={4}
                            readOnly
                            precision={0.5}
                            emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                        />

                    </Box>
                </div>
                <div className={'comment steamy'}>
                    <h4>Courtney Henry</h4>
                    <h5>Nursing Assistant</h5>
                    <p>Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt
                        mollit dolore cillum minim tempor enim.</p>

                    <Box
                        sx={{
                            width: 200,
                            margin: ' 27px auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Rating
                            name="text-feedback"
                            value={4}
                            readOnly
                            precision={0.5}
                            emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                        />

                    </Box>
                </div>
                <div className={'comment'}>
                    <h4>Courtney Henry</h4>
                    <h5>Nursing Assistant</h5>
                    <p>Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt
                        mollit dolore cillum minim tempor enim.</p>

                    <Box
                        sx={{
                            width: 200,
                            margin: ' 27px auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Rating
                            name="text-feedback"
                            value={4}
                            readOnly
                            precision={0.5}
                            emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                        />

                    </Box>
                </div>
            </Box>

        </div>
    );
}

export default Customers;
