import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from './componentes/Cover';
import Navbar from './componentes/Navbar';
import About from './componentes/About';
import Slider from './componentes/Slider';
import Info from './componentes/Info';
import Footer from './componentes/Footer';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleSroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleSroll);
  }, [scrollHeight])

  return (
    <div className="App">
     <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
