import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Doctors from './components/Doctors/Doctors.js';
import About from './components/AboutUs/About';
import Services from './components/Services/Services';
import SlideShow from './components/Slider/Slider';
import Accordion from './components/Accordion/Accordion';
import Reviews from './components/Reviews/Reviews';

function App() {

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
          <About />
        <Services />
        <SlideShow/>
        <Doctors />
        <Reviews/>
        <Accordion />
        </div>
        <Footer />
      </div>
  );
}

export default App;



