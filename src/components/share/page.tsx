'use client';
import React from 'react';
import Navbar from '../Elements/Navbar';
import Footer from '../Elements/Footer';
import HeroSection from '../sections/HeroSection';
import MultiStepForm from '../forms/MultiStepForm';
import Truseed from '../sections/trused';
import WhatWeOffer from '../sections/WhatWeOffer';
import AboutUs from '../sections/AboutUs';
import GetALoanSteps from '../sections/GetALoanSteps';
import WhyChooseUs from '../sections/WhyChooseUs';

function GPage() {
  // Move the hook inside the function component


  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-white flex flex-col" role="main">
        <HeroSection />
        <MultiStepForm />
        <Truseed />
        <WhatWeOffer />
        <AboutUs />
        <GetALoanSteps />
        <WhyChooseUs />
        <Footer />
      </main>
    </>
  );
}

export default GPage;

