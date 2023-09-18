import './App.css';
import BookSchedule from "./components/BookSchedule/BookSchedule";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import React from 'react';
import Box from "@mui/material/Box";
import Offering from "./components/OFFERING/Offering";
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
