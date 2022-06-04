import React from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';

import Works from './components/Works';

function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <h3
        className="relative font-bold text-2xl md:text-4xl text-center py-32 md:py-40 
      before:absolute before:contents-[''] before:w-full before:max-w-4xl before:h-[2px] before:bg-slate-500 before:bottom-[49px] md:before:top-[72px] before:-translate-x-1/2 before:left-1/2"
      >
        How the app works
      </h3>
      <Works />
      <Footer />
    </div>
  );
}

export default App;
