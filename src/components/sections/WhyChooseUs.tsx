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

const reasons = [
  { question: 'Wide Range of Loan Options', answer: 'From personal to business loans, we cover every financial need.' },
  { question: 'Quick and Easy Process', answer: 'Streamlined application ensures fast and hassle-free approval.' },
  { question: 'Competitive Rates', answer: 'We offer some of the lowest interest rates to keep your costs low.' },
  { question: 'Flexible Terms', answer: 'We customize repayment plans to fit your unique situation.' },
  { question: 'Trusted Lender Network', answer: 'Our strong partnerships give you better access to top lenders.' },
  { question: 'Expert Guidance and Support', answer: 'Our experts are with you every step of the way, 24/7.' },
];

export default function WhyChooseUs() {
  return (
    <section
      className={`${SatoshiBold.className} relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden`}
      aria-labelledby="why-choose-us-heading"
    >
      <div className="absolute top-[-100px] right-[-200px] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-green-300 rounded-full blur-[150px] md:blur-[200px] z-0 pointer-events-none" aria-hidden />

      <SectionHeading
        id="why-choose-us-heading"
        title={
          <>
            Why <span className={dansregular.className + ' text-[#6610F2]'}>Choose</span> Us?
          </>
        }
        description="Your Financial Success is Our Priority"
        className="mb-10 md:mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 relative z-10 max-w-6xl mx-auto">
        <div className="relative w-full flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md">
            <div className="absolute top-0 left-0 w-full aspect-[4/5] max-h-[500px] md:max-h-[620px] bg-blue-100 rounded-2xl md:rounded-3xl -z-10" aria-hidden />
            <div className="relative w-full aspect-[4/5] max-h-[420px] md:max-h-[520px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl mt-6 md:mt-12 ml-4 md:ml-12">
              <Image
                src="/images/stock/stocking_-04.jpg"
                alt="Why Choose Us - CASHNET USA team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-start" role="list">
          {reasons.map((item, i) => (
            <li key={i} className="focus-within:ring-2 focus-within:ring-[#007BFF] focus-within:ring-offset-2 rounded-lg p-2 -m-2">
              <h4 className="font-semibold text-fluid-base text-black mb-1">{item.question}</h4>
              <p className="text-gray-600 text-fluid-sm">{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
