import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Order from './components/Order';

import './sass/components/About.scss';
import './sass/components/Contact.scss';
import './sass/components/Footer.scss';
import './sass/components/Gallery.scss';
import './sass/components/Menu.scss';
import './sass/components/Order.scss';
import './sass/components/Slider.scss';
import './sass/helpers/variables.scss';

function App() {

  return (
    <Router>
      <div id="App">
        <Menu/>
        <About />
        <Gallery />
        <Contact />
        <Order />
        {/* <Routes>
          <Route path='/' element={<About />} />
          <Route path='/' element={<Gallery />} />
          <Route path='/' element={<Order />} />
          <Route path='/' element={<Contact />} />
        </Routes> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
