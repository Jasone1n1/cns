'use client';

import Footer from '@/components/Elements/Footer';
import Navbar from '@/components/Elements/Navbar';
import WhatWeOffer from '@/components/sections/WhatWeOffer';
import PageHero from '@/components/UI/PageHero';
import { useEffect } from 'react';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services | CASHNET USA';
  }, []);
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-white flex flex-col" role="main">
        <div className="pt-20 sm:pt-24 px-4 sm:px-6 md:px-12 lg:px-24">
          <PageHero
            title="Services"
            imageSrc="/images/bg/jason-goodman-nF0nQuqBsrI-unsplash.jpg"
            imageAlt="Our Services"
          />
        </div>
        <WhatWeOffer />
        <Footer />
      </main>
    </>
  );
}
