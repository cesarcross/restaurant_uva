import React, { useState } from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar.component';
import Carousel from './components/Carousel/Carousel.component';
import About from './components/About/About.component';
import Menu from './components/Menu/Menu.component';
import Event from './components/Event/Event.component';
import Contact from './components/Contact/Contact.component';
import Footer from './components/Footer/Footer.component';

const App = () => {
  const [showCarousel, setShowCarousel] = useState(true);

  return (
    <div className="App">
      <Navbar showCarousel={showCarousel} setShowCarousel={setShowCarousel} />
      <Carousel showCarousel={showCarousel} />
      <Menu />
      <About />
      <Event />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
