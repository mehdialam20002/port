
import './App.css';
import React from 'react';
import Home from './components/Home/Home';

import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/Skills/Skills';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Contact/>
      <Footer/>
    </main>
    </>
  );
}

export default App;
