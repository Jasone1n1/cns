'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!headingRef.current || !paraRef.current) return;
    const heading = headingRef.current;
    const para = paraRef.current;
    heading.style.opacity = '0';
    heading.style.transform = 'translateY(20px)';
    para.style.opacity = '0';
    para.style.transform = 'translateY(16px)';
    const t1 = setTimeout(() => {
      heading.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      heading.style.opacity = '1';
      heading.style.transform = 'translateY(0)';
    }, 200);
    const t2 = setTimeout(() => {
      para.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      para.style.opacity = '1';
      para.style.transform = 'translateY(0)';
    }, 400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section
      className="relative w-full min-h-[min(100vh,700px)] sm:min-h-[min(100vh,800px)] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 z-[1]" aria-hidden />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center md:items-start md:text-left">
        <h1
          ref={headingRef}
          className="text-fluid-4xl sm:text-fluid-5xl md:text-fluid-6xl font-extrabold leading-tight mb-3 sm:mb-4 text-white"
        >
          Welcome to <span className="text-green-400">CASHNET USA</span>
        </h1>
        <p
          ref={paraRef}
          className="text-fluid-lg md:text-fluid-xl max-w-lg mb-6 text-white/95"
        >
          Get the financial support you need with our simple and secure loan solutions. Apply today and move closer to achieving your personal or business goals with confidence. </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <Link
            href="/apply-now"
            className="inline-flex items-center justify-center rounded-full bg-[#007BFF] px-5 py-3 sm:px-6 sm:py-3 text-white text-fluid-base font-medium hover:bg-[#0069d9] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get Started
          </Link>
          <Link
            href="/about-us"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 sm:px-6 sm:py-3 text-green-600 text-fluid-base font-medium hover:bg-gray-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007BFF]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
