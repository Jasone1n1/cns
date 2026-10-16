'use client';

import Footer from '@/components/Elements/Footer';
import Navbar from '@/components/Elements/Navbar';
import WhatWeOffer from '@/components/sections/WhatWeOffer';
import PageHero from '@/components/UI/PageHero';
import { useEffect } from 'react';

export default function ContactUs() {
  useEffect(() => {
    document.title = 'Contact Us | CASHNET USA';
  }, []);
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-white flex flex-col" role="main">
        <div className="pt-20 sm:pt-24 px-4 sm:px-6 md:px-12 lg:px-24">
          <PageHero
            title="Contact Us"
            imageSrc="/images/bg/jason-goodman-nF0nQuqBsrI-unsplash.jpg"
            imageAlt="Contact Us"
          />
        </div>
        <WhatWeOffer />
        <Footer />
      </main>
    </>
  );
}
