import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import CeoMessage from './sections/CeoMessage';
import Mission from './sections/Mission';
import Executives from './sections/Executives';
import Partners from './sections/Partners';
import Events from './sections/Events';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main className="overflow-hidden">
        <Home />
        <CeoMessage />
        <Mission />
        <Executives />
        <Partners />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

export default App;