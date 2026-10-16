'use client';

import Image from 'next/image';
import React from 'react';

interface ServiceCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

/**
 * Card with image (fixed aspect ratio to prevent CLS), title, and description.
 * Stacks properly on mobile; responsive padding and typography.
 */
export default function ServiceCard({ image, imageAlt, title, description }: ServiceCardProps) {
  return (
    <article className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 text-left hover:shadow-2xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-[#007BFF] focus-within:ring-offset-2">
      <div className="relative w-full aspect-[4/3] mb-5 md:mb-6 rounded-xl md:rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-fluid-2xl md:text-fluid-3xl font-bold text-black mb-3 md:mb-4">{title}</h3>
      <p className="text-fluid-base md:text-fluid-lg text-gray-600">{description}</p>
    </article>
  );
}
