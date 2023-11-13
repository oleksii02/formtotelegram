import './App.css';
import BookSchedule from "./components/BookSchedule/BookSchedule";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import React from 'react';
import Box from "@mui/material/Box";
import Offering from "./components/OFFERING/Offering";
import Gallery from "./components/UI/Gallery/Gallery";
import Customers from "./components/Customers/Customers";
import {SnackbarProvider} from 'notistack';
import DrawerAppBar from "./components/UI/DrawerAppBar/DrawerAppBar";



function App() {


    return (
        <SnackbarProvider maxSnack={3}>

            <Box className="App">
<<<<<<< Updated upstream
=======
                <DrawerAppBar/>
                <BookSchedule/>
>>>>>>> Stashed changes
                <HomePage/>
                <Offering/>
                <Gallery/>
                <BookSchedule/>
                <Customers/>


                <Footer/>


            </Box>
        </SnackbarProvider>
    );
}

export default App;
