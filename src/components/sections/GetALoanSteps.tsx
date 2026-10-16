'use client';

import Image from 'next/image';
import { loanStepsData } from '@/data/loanStepsData';
import localFont from 'next/font/local';
import ApplyButton from '@/components/share/Apply-BT';
import SectionHeading from '@/components/UI/SectionHeading';

const dansregular = localFont({
  src: '../../fonts/DancingScript/DancingScript-Regular.ttf',
});

const SatoshiBold = localFont({
  src: '../../fonts/Satoshi/Fonts/Satoshi-Bold.ttf',
});

function handleApplyClick() {
  window.location.href = '/apply-now';
}

export default function GetALoanSteps() {
  return (
    <section
      className={`${SatoshiBold.className} relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden`}
      aria-labelledby="get-a-loan-heading"
    >
      <div className="absolute top-0 left-[-200px] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-400 rounded-full blur-[150px] md:blur-[200px] z-[1] pointer-events-none" aria-hidden />
      <div className="absolute top-0 right-[-200px] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-green-400 rounded-full blur-[150px] md:blur-[200px] z-[1] pointer-events-none" aria-hidden />

      <SectionHeading
        id="get-a-loan-heading"
        title={
          <>
            Get a Loan in <span className={dansregular.className + ' text-[#6610F2]'}>3 Easy Steps</span>
          </>
        }
        description={
          <>
            <span className={dansregular.className + ' text-[#6610F2] font-bold'}>Follow these simple</span> steps to
            get started with your loan application.
          </>
        }
        className="mb-10 md:mb-16"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-[2] max-w-6xl mx-auto">
        {loanStepsData.map((item, index) => (
          <article
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-xl min-h-[320px] sm:min-h-[350px]"
          >
            <div className="absolute inset-0 z-[1]">
              <Image
                src={item.bgImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40" aria-hidden />
            </div>
            <div
              className={`${dansregular.className} absolute top-0 right-0 text-fluid-3xl md:text-fluid-4xl font-semibold px-4 py-4 md:px-6 md:py-6 bg-[#007BFF] text-[#56CBF9] z-[2] shadow-md text-stroke-3`}
              aria-hidden
            >
              {index + 1}
            </div>
            <div className="absolute bottom-0 w-full z-[2] backdrop-blur-xl bg-white/20 p-4 md:p-6 rounded-t-2xl">
              <h3 className="text-fluid-lg md:text-fluid-xl font-bold text-white mb-1 md:mb-2">{item.title}</h3>
              <p className="text-fluid-sm text-white/95">{item.description}</p>
            </div>
            <div className="h-[280px] sm:h-[320px] md:h-[350px]" aria-hidden />
          </article>
        ))}
      </div>
      <div className="flex justify-center mt-8 md:mt-10">
        <ApplyButton label="Apply Now" onClick={handleApplyClick} />
      </div>
    </section>
  );
}
