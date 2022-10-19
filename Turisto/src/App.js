import React from 'react';
import './App.css';

import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import Cards from "./Components/Cards/Cards";
import InfoBox from "./Components/InfoBox/InfoBox";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Cards/>
      <InfoBox/>
      <Contact/>
      <Footer/>

      {/* <div style={{marginBottom :'200px'}}/> */}
    </div>
  );
}

export default App;

