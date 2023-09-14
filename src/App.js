import './App.css';
import BookSchedule from "./components/BookSchedule/BookSchedule";
import DrawerAppBar from "./components/UI/DrawerAppBar/DrawerAppBar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import React from 'react';
import Box from "@mui/material/Box";
import Offering from "./components/OFFERING/Offering";
import RegularCleaning from "./components/TypeCleaning/RegularCleaning";
import DeepCleaning from "./components/TypeCleaning/DeepCleaning";
import MoveInCleaning from "./components/TypeCleaning/MoveInCleaning";
import CleaningAfter from "./components/TypeCleaning/CleaningAfter";
import OfficeCleaning from "./components/TypeCleaning/OfficeCleaning";
import Gallery from "./components/UI/Gallery/Gallery";
import Customers from "./components/Customers/Customers";



function App() {






    return (
            <Box className="App">
                <HomePage/>
                <Offering/>
                <Gallery/>
                <BookSchedule/>
                <Customers/>



                <Footer/>


            </Box>
    );
}

export default App;
