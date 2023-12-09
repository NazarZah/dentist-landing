import React from 'react';
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Doctors from './components/Doctors/Doctors';
import About from './components/AboutUs/About';
import Services from './components/Services/Services';
import SlideShow from './components/Slider/Slider';
import Accordion from './components/Accordion/Accordion';
import Reviews from './components/Reviews/Reviews';

function App() {

  return (
    <>
        <Header />
        <About />
        <Services />
        <SlideShow/>
        <Doctors />
        <Reviews/>
        <Accordion />
        <Footer />
      </>
  );
}

export default App;



