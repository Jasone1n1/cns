'use client';

import React from 'react';

interface SectionHeadingProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Reusable section heading with optional accent span and description.
 * Semantic and accessible.
 */
export default function SectionHeading({
  title,
  description,
  className = '',
  id,
}: SectionHeadingProps) {
  return (
    <header className={`text-center max-w-4xl mx-auto mb-10 md:mb-16 relative z-[2] ${className}`}>
      <h2 id={id} className="text-fluid-4xl md:text-fluid-5xl font-bold text-black mb-3 md:mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-fluid-base md:text-fluid-lg text-gray-600">
          {description}
        </p>
      )}
    </header>
  );
}
