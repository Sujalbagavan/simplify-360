import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions/Solutions';
import Stats from './components/Stats/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Solutions />
      <Stats />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;