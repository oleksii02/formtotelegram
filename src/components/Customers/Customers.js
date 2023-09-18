import React, {useState} from 'react';
import './Customers.css'
import Box from "@mui/material/Box";
import { Grid, Pagination, Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import costomers from './costomers.json'
import {createTheme, ThemeProvider} from "@mui/material/styles";



function Customers(props) {

    const [allPage, setAllPage] = useState(Math.ceil(costomers.comments.length/3))
    const [currentPage, setCurrentPage] = useState(1)

    console.log(currentPage)

    function addComment() {
      //  let parse_obj = JSON.parse(costomers);
      //   costomers['comments'].unshift({"teamId":"4","status":"pending"});
      //   costomers = JSON.stringify(costomers);
      //   console.log(costomers['comments'].unshift({"teamId":"4","status":"pending"}))

    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#003156',
            },

        },
    });




    return (
        <ThemeProvider theme={theme}>
        <div className={'Customers'}>
            <div className={'background'}>
                <h3>Happy Customers</h3>
            </div>
            <Grid container className={'comments'}>
                {costomers.comments.slice((currentPage * 3)-3, (currentPage * 3)).map((item) => (
                    <Grid item xs={12} md={4} >
                        <div className={`comment ${(item.id%2 === 0) ? 'steamy': 'none'}`}>
                            <h4>{item.Name}</h4>
                            <h5>{item.Offering}</h5>
                            <p>{item.Massage}</p>

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
                                    value={item.Rating}
                                    readOnly
                                    precision={0.5}
                                    emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                                />

                            </Box>
                        </div>
                    </Grid>

                ))}
                <Grid item xs={12}>
                    <Pagination count={allPage} variant="outlined" shape="rounded" color={'primary'}
                    onChange={(event, value) => setCurrentPage(value)}
                    />
                </Grid>
                {/*<Button*/}
                {/*onClick={() => addComment()*/}
                {/*}>*/}
                {/*    fdfd*/}
                {/*</Button>*/}
            </Grid>

        </div>
        </ThemeProvider>
    );
}

export default Customers;
