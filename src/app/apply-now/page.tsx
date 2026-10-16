'use client';

import Footer from '@/components/Elements/Footer';
import Navbar from '@/components/Elements/Navbar';
import MultiStepForm from '@/components/forms/MultiStepForm';
import FSQ from '@/components/UI/FSQ';
import PageHero from '@/components/UI/PageHero';
import { useEffect } from 'react';

export default function ApplyPage() {
  useEffect(() => {
    document.title = 'Apply Now | CASHNET USA';
  }, []);
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-white flex flex-col" role="main">
        <div className="pt-20 sm:pt-24 px-4 sm:px-6 md:px-12 lg:px-24">
          <PageHero
            title="Apply Now"
            imageSrc="/images/bg/vitaly-gariev-MNQ2p7DtzEo-unsplash.jpg"
            imageAlt="Apply for a loan"
            titleClassName="text-green-400"
          />
        </div>
        <MultiStepForm />
        <FSQ />
        <Footer />
      </main>
    </>
  );
}
