'use client';

import SectionHeading from '@/components/UI/SectionHeading';
import localFont from 'next/font/local';
import Image from 'next/image';

const dansregular = localFont({
  src: '../../fonts/DancingScript/DancingScript-Regular.ttf',
});

const SatoshiBold = localFont({
  src: '../../fonts/Satoshi/Fonts/Satoshi-Bold.ttf',
});

export default function AboutUs() {
  return (
    <section
      className={`${SatoshiBold.className} relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden`}
      aria-labelledby="about-us-heading"
    >
      <SectionHeading
        id="about-us-heading"
        title={
          <>
            About <span className={dansregular.className + ' text-[#6610F2]'}>Us</span> CASHNET USA
          </>
        }
        description={
          <>
            Learn more about our{' '}
            <span className={dansregular.className + ' text-[#6610F2]'}>mission, vision, and the values</span>{' '}
            that drive our work every day.
          </>
        }
        className="mb-10 md:mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-[2] max-w-6xl mx-auto">
        <div className="relative w-full flex justify-center order-2 md:order-1">
          <div className="relative w-full aspect-[5/4] max-w-md mx-auto rounded-xl overflow-hidden">
            <Image
              src="/images/stock/Stocking_02.jpg"
              alt="About CASHNET USA"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="relative z-[2] order-1 md:order-2">
          <div className="absolute top-0 right-[-80px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-400 rounded-full blur-[120px] md:blur-[180px] z-[1] pointer-events-none" aria-hidden />
          <div className="relative z-[2] text-gray-700 text-fluid-base md:text-fluid-lg leading-relaxed bg-white/80 p-4 sm:p-6 rounded-xl">
            <p className="mb-4">
              <span className={dansregular.className + ' text-[#6610F2] text-fluid-xl font-bold'}>At</span> North n
              Loans, we are dedicated to providing our customers with the financial solutions they need to achieve
              their goals. Our mission is to empower individuals and families by offering a range of loan products
              that are tailored to meet their unique needs.
            </p>
            <p className="mt-4">
              We understand that financial challenges can arise at any time, which is why we are here to make the
              loan application process as easy and efficient as possible. Our dedicated team of financial experts
              is available to guide you through every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
