import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Hero from '../components/Hero';


function Home() {
    return (
      <div className="App  bg-white">
        <Navbar />
        <Hero /> 
        <Card />
        <Footer />
      </div>
    );
  }
  
  export default Home;