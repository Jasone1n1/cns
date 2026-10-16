'use client';

import { whatWeOfferData } from '@/data/whatWeOffer';
import localFont from 'next/font/local';
import SectionHeading from '@/components/UI/SectionHeading';
import ServiceCard from '@/components/UI/ServiceCard';

const dansregular = localFont({
  src: '../../fonts/DancingScript/DancingScript-Regular.ttf',
});

const SatoshiBold = localFont({
  src: '../../fonts/Satoshi/Fonts/Satoshi-Bold.ttf',
});

export default function WhatWeOffer() {
  return (
    <section
      className={`${SatoshiBold.className} relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden`}
      aria-labelledby="what-we-offer-heading"
    >
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-blue-400 rounded-full blur-[200px] sm:blur-[250px] z-[1] pointer-events-none" aria-hidden />
      <div className="relative z-[2] max-w-6xl mx-auto">
        <SectionHeading
          id="what-we-offer-heading"
          title={
            <>
              What <span className={dansregular.className + ' text-[#6610F2]'}>We</span> Offer
            </>
          }
          description={
            <>
              Explore our range of{' '}
              <span className={dansregular.className + ' text-[#6610F2]'}>financial solutions</span>{' '}
              designed to meet your needs.
            </>
          }
          className="mb-10 md:mb-16"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {whatWeOfferData.map((item, index) => (
            <ServiceCard
              key={index}
              image={item.image}
              imageAlt={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
