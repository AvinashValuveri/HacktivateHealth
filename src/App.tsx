import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/sections/About';
import Tracks from './components/sections/Tracks';
import Schedule from './components/sections/Schedule';
import Prizes from './components/sections/Prizes';
import Sponsors from './components/sections/Sponsors';
import FAQ from './components/sections/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <Prizes />
      <Sponsors />
      <FAQ />
    </div>
  );
}

export default App;