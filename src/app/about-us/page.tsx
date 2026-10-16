'use client';

import Footer from '@/components/Elements/Footer';
import Navbar from '@/components/Elements/Navbar';
import AboutUs from '@/components/sections/AboutUs';
import PageHero from '@/components/UI/PageHero';
import { useEffect } from 'react';

export default function AboutUsPage() {
  useEffect(() => {
    document.title = 'About Us | CASHNET USA';
  }, []);
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-white flex flex-col" role="main">
        <div className="pt-20 sm:pt-24 px-4 sm:px-6 md:px-12 lg:px-24">
          <PageHero
            title="About Us"
            imageSrc="/images/bg/brooke-cagle-WHWYBmtn3_0-unsplash.jpg"
            imageAlt="About Us"
          />
        </div>
        <AboutUs />
        <Footer />
      </main>
    </>
  );
}
