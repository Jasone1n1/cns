'use client';

import React from 'react';
import { HiArrowCircleRight } from 'react-icons/hi';

interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'button' | 'submit';
  'aria-label'?: string;
  [key: string]: unknown;
}

const ApplyButton: React.FC<ButtonProps> = ({
  label = 'Apply Now',
  icon = <HiArrowCircleRight size={24} className="shrink-0" aria-hidden />,
  onClick,
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        group inline-flex items-center justify-center gap-2 rounded-full font-bold text-white
        bg-[#007BFF] border-[3px] border-white/30 px-5 py-2.5
        shadow-lg transition-all duration-300 ease-out
        hover:scale-[1.02] hover:border-white/60
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007BFF]
        text-fluid-sm md:text-base
        ${className}
      `}
      aria-label={ariaLabel ?? (typeof label === 'string' ? label : undefined)}
      {...rest}
    >
      <span>{label}</span>
      {icon && <span className="inline-flex transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>{icon}</span>}
    </button>
  );
};

export default ApplyButton;
