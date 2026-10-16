'use client';

import localFont from 'next/font/local';
import Image from 'next/image';

const dansregular = localFont({
  src: '../../fonts/DancingScript/DancingScript-Regular.ttf',
});

const SatoshiRegular = localFont({
  src: '../../fonts/Satoshi/Fonts/Satoshi-Regular.ttf',
});

const SatoshiBold = localFont({
  src: '../../fonts/Satoshi/Fonts/Satoshi-Bold.ttf',
});

const trustItems = [
  {
    image: '/images/icons/png/application.png',
    imageAlt: 'Loan application',
    title: 'Loan Application',
    description: (
      <>
        Our loan application is quick and easy, taking only{' '}
        <span className={dansregular.className + ' text-[#6610F2] text-fluid-lg md:text-fluid-xl'}>a few minutes</span>{' '}
        to complete. Rest assured, all your information is stored securely and confidentially.
      </>
    ),
  },
  {
    image: '/images/icons/png/trust.png',
    imageAlt: 'Trusted',
    title: 'Trusted',
    description: (
      <>
        At CASHNET USA, we believe in{' '}
        <span className={dansregular.className + ' text-[#6610F2] text-fluid-lg md:text-fluid-xl'}>transparency.</span>{' '}
        From our straightforward processes to our clear pricing, we ensure everything is open and easy to understand.
      </>
    ),
  },
  {
    image: '/images/icons/png/expert.png',
    imageAlt: 'Expert agent',
    title: 'Expert Agent',
    description: (
      <>
        Our team of expert agents at CASHNET USA is here to help. We{' '}
        <span className={dansregular.className + ' text-[#6610F2] text-fluid-lg md:text-fluid-xl'}>understand</span> that
        expertise and professionalism make all the difference when it comes to handling your financial needs.
      </>
    ),
  },
];

export default function Trused() {
  return (
    <section
      className={`${SatoshiBold.className} relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden`}
      aria-labelledby="trusted-heading"
    >
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-green-400 rounded-full blur-[150px] md:blur-[200px] z-[1] pointer-events-none" aria-hidden />

      <div className="relative z-[3] max-w-6xl mx-auto">
        <h2 id="trusted-heading" className="sr-only">
          Why trust CASHNET USA
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center">
          {trustItems.map((item, index) => (
            <article key={index} className="flex flex-col items-center space-y-4">
              <Image
                width={80}
                height={80}
                src={item.image}
                alt=""
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
              />
              <h3 className="text-fluid-2xl md:text-fluid-3xl font-semibold text-black">{item.title}</h3>
              <p className={`${SatoshiRegular.className} text-gray-600 text-fluid-base md:text-fluid-lg max-w-sm mx-auto`}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
