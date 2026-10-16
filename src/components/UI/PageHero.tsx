'use client';

import Image from 'next/image';

interface PageHeroProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  /** Optional title class (e.g. text-green-400 for Apply page) */
  titleClassName?: string;
}

/**
 * Reusable page hero with image + overlay and title.
 * Uses next/image with fill + aspect ratio to avoid layout shift (CLS).
 */
export default function PageHero({ title, imageSrc, imageAlt, titleClassName = 'text-white' }: PageHeroProps) {
  return (
    <section
      className="relative w-full rounded-2xl overflow-hidden shadow-lg mb-8 md:mb-12"
      aria-label={`${title} banner`}
    >
      <div className="relative aspect-[21/9] min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
        <h1 className={`absolute inset-0 flex items-center justify-center text-fluid-4xl md:text-fluid-5xl font-bold ${titleClassName}`}>
          {title}
        </h1>
      </div>
    </section>
  );
}
